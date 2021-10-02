/*! 
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

exports.lambdaHandler = async event => {
  const { street, city, state, zip } = event;
  console.log(`Address information: ${street}, ${city}, ${state} - ${zip}`);

  const approved = [street, city, state, zip].every(i => i?.trim().length > 0);

  return {
    statusCode: 200,
    body: JSON.stringify({ 
      approved, 
      message: `address validation ${ approved ? 'passed' : 'failed'}` 
    })
  }
};
