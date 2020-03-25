
# Deployed Website:-
** https://saurabhbiswas.github.io/React-Redux-Saga **

# React Redux Saga : Sample App showing customer list and address
Design an application to display customer information on the landing page. Assignment has been broken down into three parts- Front End UI, Backend read APIs and Database schema design. Sub-parts of each section has been annotated as mandatory/optional. Optional assignments are good to have to demonstrate e2e functionality. Detailed requirements follows:

Requirements:-

    - UI – The landing page should have two container with following behaviour:
        - Container 1
            - List of customers with each row showing customer basic details - Employee Id, Name, Age, Sex
        - Container 2
            - On clicking of customer row in container 1, list of customer’s address should be listed (customer may have 0 or more addresses assigned to him)
 
    - API (Optional) – Use mock APIs 
        - endpoint to fetch customer info, given customer id
        - endpoint to fetch all customer addresses given customer id
 
    - Database (Optional) [Not required if using mock APIs]
        - Store customer and address data in a database. Prepopulate customers data in the database with seed data.
 
Tech choices:

- UI
    - react 
    - state management -redux 
    - middleware - reduct saga 
