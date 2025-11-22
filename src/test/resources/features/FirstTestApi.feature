# Karate Feature: Sample API Test
# Description:
#   This feature demonstrates a simple GET request using Karate.
#   It retrieves geo-information for a given IP address and logs the HTTP status.
#
# Author: Zied HANNACHI
# Date: 2025-11-16
# Tags: @api @get

  @Test
Feature: Sample API Test

  # Scenario: Perform a GET request and print the status
  Scenario: Test API GET

    # Step 1: Set the URL for the API request
    Given url 'https://ipinfo.io/161.185.160.93/geo'

    # Step 2: Perform a GET request
    When method GET

    # Step 3: Store the HTTP response status code in a variable
    * def status = responseStatus

    # Step 4: Print the status code to console / Karate report
    Then print 'HTTP Status:', status
