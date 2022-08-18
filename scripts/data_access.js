// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

// location import
import wixLocation from 'wix-location';

// storage import
import {local} from 'wix-storage';

// The globus api address, everything regarding globus should use this as base
const globus_api_rooturl = "https://transfer.api.globusonline.org/v0.10";

// sleeper function for debug
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// functions to get the code verifier
function dec2hex(dec) {
    	return ('0' + dec.toString(16)).substr(-2)
	}

function generateRandomString() {
	var array = new Uint32Array(56/2);
	crypto.getRandomValues(array);
	return Array.from(array, dec2hex).join('');
}

// functions to get the challenge
function sha256(plain) { // returns promise ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  console.log("Encodeded verifier: ", data);
  return crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a) {
      var str = "";
      var bytes = new Uint8Array(a);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i]);
      }
      return btoa(str)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    }

async function challenge_from_verifier(v) {
  let hashed = await sha256(v);
  console.log("Hashed verifier: ", hashed)
  let base64encoded = base64urlencode(hashed);
  return base64encoded;
}

// Run the endpoint search
async function runSearch(){
	// read out what we need to search
	const search_query = $w("#endpointsearch").value;
	const target_url = globus_api_rooturl + "/endpoint_search?filter_fulltext=" + search_query;
	console.log("Search url: ", target_url);

	// get the auth token
	const auth_token = local.getItem("auth_token");

	if (auth_token == null){
		// Do something smart here
		console.log("No Auth Token...");
	}
	else{
		// get the data
		fetch(target_url, {
				method: 'GET',
				headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Authorization': 'Bearer ' + auth_token,
							}
				}).then(function (resp) {

						// Return the response as JSON
						return resp.json();

						}).then(function (data) {

						// Log the API data
						console.log('Search Result', data);
						var results = data["DATA"];

						// collect the rows of the results table
						var rows = [];
						for (var i = 0; i < results.length && i < 5; i++){
							var row = {"name": results[i]["display_name"], "id": results[i]["id"]};
							rows.push(row);
						}

						// set the rows
						$w("#searchresults").rows = rows;

						}).catch(function (err) {

						// Log any errors
						console.log('something went wrong', err);

						});
				}

}


$w.onReady(function () {
	// Write your JavaScript here

	// START ELEMENT SETUP
	//====================
	// search results should be empty
	$w("#searchresults").rows = [];

	// END ELEMENT SETUP
	//==================

	// Get the URL encoded quries
	let query = wixLocation.query;
	console.log(query);

	// if we have a code querry, we already clicked the auth button
	if (query.code !== undefined) {
	    // log the current code
		console.log("Current code: ", query.code);

		// readout the verifier
		const verifier = local.getItem("verifier");
		console.log("Retrieved verifier: ", verifier)

		// create a post request
		var target_url = "https://auth.globus.org/v2/oauth2/token";

		// fetch the tokens
		fetch(target_url, {
			   method: 'POST',
	           body: 'grant_type=authorization_code'+
			         '&code=' + query.code+
			         '&redirect_uri=https%3A%2F%2Fjanisfluri.wixsite.com%2Fcosmogrid%2Fblank'+
					 '&client_id=e590dbfe-ab94-4222-a6f2-86ba7bc40342'+
			   	     '&code_verifier='+verifier,
	           headers: {
		                 'Content-Type': 'application/x-www-form-urlencoded',
	                    }
              }).then(function (resp) {

	                // Return the response as JSON
					return resp.json();

					}).then(function (data) {

					// Log the API data
					console.log('token', data);
					if ("other_tokens" in data){
						console.log("Nice");
						var other_tokens = data["other_tokens"];
						for (var i = 0; i < other_tokens.length; i++){
							console.log("Token: ", i, " ", other_tokens[i]);
							if (other_tokens[i]["resource_server"] == "transfer.api.globus.org"){

								// TODO: Clean this up
								console.log("Success!");
								$w('#authindicator').show();
								$w('#authindicator').text = "Success!";
								// save token to local storage
								local.setItem("auth_token", other_tokens[i]["access_token"]);
							}
						}
					}

					}).catch(function (err) {

					// Log any errors
					console.log('something went wrong', err);

					});

    }

	// Click 'Preview' to run your code
});



/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export async function globusauth_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	
	// we need to generate a challenge
	var verifier = generateRandomString();
	console.log("Generated Verifier: ", verifier);
	var challenge = await challenge_from_verifier(verifier);
	console.log("Corresponding Challenge: ", challenge);

	// we need to save the verifier
	local.setItem("verifier", verifier);
	// just to make things easier
	local.setItem("challenge", challenge);
	//await sleep(10000);

	// build the url
	const url = "https://auth.globus.org/v2/oauth2/authorize?"+
	            "code_challenge="+challenge+"&"+
				"code_challenge_method=S256&"+
	            "client_id=e590dbfe-ab94-4222-a6f2-86ba7bc40342&"+
				"scope=urn%3Aglobus%3Aauth%3Ascope%3Atransfer.api.globus.org%3Aall%20urn%3Aglobus%3Aauth%3Ascope%3Aauth.globus.org%3Aview_identities%20offline_access&"+
				"response_type=code&"+
				"redirect_uri=https%3A%2F%2Fjanisfluri.wixsite.com%2Fcosmogrid%2Fblank&"+
				"state=_default";
	console.log("Globus URL: ,", url);
	wixLocation.to(url);
}


/**
*	Adds an event handler that runs when the cursor is inside the
 input element and a key is pressed.
	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
*	 @param {$w.KeyboardEvent} event
*/
export function endpointsearch_keyPress(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	 if(event.key === "Enter"){
		 console.log("Starting Search...");
		 runSearch();
		 }
}

/**
*	Adds an event handler that runs when a table row is selected.
	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onRowSelect)
*	 @param {$w.TableRowEvent} event
*/
export function searchresults_rowSelect(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 

	// set authid value for auth
	$w("#authid").value = event.rowData.id;

	const url = "https://app.globus.org/file-manager?origin_id=" + $w("#authid").value;
	console.log("Row click: ", url);

	// Change link to Button
	$w("#authbutton").link = url;
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function authid_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 

	// create the url
	const url = "https://app.globus.org/file-manager?origin_id=" + $w("#authid").value;
	console.log("Row click: ", url);

	// Change link to Button
	$w("#authbutton").link = url;

}



/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function testtransfer_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	
	// retrieve the token and the endpoint
	const auth_token = local.getItem("auth_token");
	const endpoint_id = local.getItem("target_endpoint_id");

	console.log("Token: ", auth_token);
	console.log("Target: ", endpoint_id);

	// start a test transfer
	// get the submission id
	const submit_url = globus_api_rooturl + "/submission_id";
	fetch(submit_url, {
			method: 'GET',
			headers: {
						//'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization': 'Bearer ' + auth_token,
					}
			}).then(function (resp) {

				// Return the response as JSON
				return resp.json();

				}).then(function (data) {

				// Log the API data
				console.log('subid data', data);
				const submit_id = data["value"];
				console.log('subid', submit_id);

				// now we start the transfer
				const transfer_url = globus_api_rooturl + "/transfer";

				// create the data list
				// since {pattern1,pattern2,...} wildcards are not supported by the filter rules
				// we need to create a transfer item for each dir we want to transfer
				var transfer_items = [];
				for (var i = 0; i < 1250; i++){
					transfer_items.push({'DATA_TYPE': 'transfer_item',
										              //'source_path': '/home/ipa/kacprzak/CosmoGrid/raw_data/sobol_seeds',
													  //'source_path': '/home/ipa/kacprzak/CosmoGrid/raw_data/fiducial_delta_run/cosmo_H0=67.36_Ob=0.0493_Om=0.26_ns=0.9649_num=0_s8=0.84_w0=-1.0',
													  'source_path': '/home/ipa/refreg/experiments/jafluri/temp_trash/globus_transfer/run_' + String(2*i),
													  'destination_path': '/scratch/snx3000/jafluri/cosmogrid_transfer_tests/run_' + String(2*i),
													  'recursive': true});
				}

				// Transfer the for corrupted zip fix
				transfer_items = [{'DATA_TYPE': 'transfer_item',
												'source_path': '/home/ipa/kacprzak/CosmoGrid/KiDS1000_data_products',
												'destination_path': '/scratch/snx3000/jafluri/CosmoGrid_CleanUP/KiDS_1000_transfer',
												'recursive': true},];

				// define the filters
				var filter_rules = [{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'power_spec.txt'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'baryonification_params.py'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'baryonified_shells.npz.info'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'class_processed.hdf5'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'concept.params'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'cosmology.par'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'CosmoML.log'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': '*100.npz'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'noise_patches.npz'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'projected_patches_baryon_euler.npz'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'projected_patches_euler.npz'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'dir',
									 'name': '__pycache__'},
									{'DATA_TYPE': 'filter_rule',
								     'method': 'exclude',
									 'type': 'file',
									 'name': 'wl_weights.npz'},]


				// fetch
				fetch(transfer_url, {
					method: 'POST',
					body: JSON.stringify({'DATA_TYPE': 'transfer',
			                    		  'submission_id': submit_id,
									      'label': 'test_transfer',
										  'source_endpoint': '73f7230c-3b05-11e7-bcf7-22000b9a448b',
										  'destination_endpoint': endpoint_id,
										  'DATA': transfer_items,
										  'filter_rules': filter_rules,
										  'sync_level': 0,
										  }),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + auth_token,
					}
				}).then(function (resp) {

				// Return the response as JSON
				return resp.json();

				}).then(function (data) {

				// Log the API data
				console.log('transfer answer', data);
				
				});

				}).catch(function (err) {

				// Log any errors
				console.log('something went wrong', err);

				});

}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function authbutton_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 

	// save the authid to local storage
	local.setItem("target_endpoint_id", $w("#authid").value);

}
