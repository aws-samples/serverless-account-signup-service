/*! 
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

exports.lambdaHandler = async event => {
  const { ssn, email } = event;
  console.log(`SSN: ${ssn} and email: ${email}`);

  const approved = ssnRegex.test(ssn) && emailRegex.test(email);

  return {
    statusCode: 200,
    body: JSON.stringify({ 
      approved,
      message: `identity validation ${approved ? 'passed' : 'failed'}`
    })
  }
};
