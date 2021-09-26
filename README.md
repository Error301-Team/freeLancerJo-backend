## Yelp Api

- did a get request to yelp api to get businesses filtered by location 

### retrun info from the get request are 

- id
- alias
- name
- image_url
- is_closed
- url
-  review_count 
- categories
- rating
- coordinates
- transactions
- location
- phone
- display_phone

## FreeLancer Api

- did a get request to yelp api to get freelancers

### retrun info from the get request are 

- id
- name
- category
- active_project_count
- seo_url
- seo_info
- local

## Pixabay Api

- did a get request to yelp api to get Pixabay photos filtered by q

### retrun info from the get request are 

- id
- pageURL
- type
- tags
- previewURL
- previewWidth
- previewHeight
- webformatURL
- largeImageURL
- views
- downloads
- collections
- likes
- comments
- user_id
- user
- userImageURL
- imageURL

## Freelancers Database

- did 4 requests for freelancers Database on atlas 

### Requests

- get request done by /getUsers to get all users to the heroku link to get data

- post request done by putting /createUser in the url and a body for the user data based on the user Schema

- delete request done by putting /deleteUser/{id} and choosing the user to be deleting by putting the userid in the url

- updateUser  request done by putting /updateUser/{id} and a body for the user data based on the user Schema 

choosing the user data to be update by putting the userid in the url