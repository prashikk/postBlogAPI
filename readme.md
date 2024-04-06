## Authentication Endpoints:
## a. Login as Admin:
Method: POST
URL: http://localhost:3000/auth/login/admin

Expected Behavior:
If the credentials are valid, you should receive a JWT token in the response body.
Status code: 200 OK

## b. Login as User:
Method: POST
URL: http://localhost:3000/auth/login/user

Expected Behavior:
If the credentials are valid, you should receive a JWT token in the response body.
Status code: 200 OK

## 2. Post Endpoints:
## a. Create a Post:
Method: POST
URL: http://localhost:3000/posts
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Body:
json
{
  "title": "Test Post",
  "content": "This is a test post."
}
Expected Behavior:
If the request is successful, you should receive the newly created post in the response body.
Status code: 201 Created

## b. Get All Posts:
Method: GET
URL: http://localhost:3000/posts
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Expected Behavior:
If the request is successful, you should receive a list of all posts in the response body.
Status code: 200 OK

## c. Filter Posts:
Method: GET
URL: http://localhost:3000/posts/filter?startDate={startDate}&endDate={endDate}&author={author}&tags={tags}
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Query Parameters: Replace placeholders with actual values if needed.
Expected Behavior:
If the request is successful, you should receive a filtered list of posts in the response body based on the provided filters.
Status code: 200 OK

## d. Delete a Post:
Method: DELETE
URL: http://localhost:3000/posts/{postId}
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Path Parameters: Replace {postId} with the ID of the post you want to delete.
Expected Behavior:
If the request is successful, you should receive a success message in the response body.
Status code: 200 OK

## 3. Tag Endpoints:
## a. Add a Tag to a Post:
Method: POST
URL: http://localhost:3000/posts/{postId}/tags
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Path Parameters: Replace {postId} with the ID of the post you want to add a tag to.
Body:
json
Copy code
{
  "name": "TestTag"
}
Expected Behavior:
If the request is successful, you should receive the newly created tag in the response body.
Status code: 201 Created

## b. Edit a Tag:
Method: PUT
URL: http://localhost:3000/tags/{tagId}
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Path Parameters: Replace {tagId} with the ID of the tag you want to edit.
Body:
json
{
  "name": "NewTagName"
}
Expected Behavior:
If the request is successful, you should receive the updated tag in the response body.
Status code: 200 OK

## c. Delete a Tag:
Method: DELETE
URL: http://localhost:3000/tags/{tagId}
Headers:
Key: Authorization
Value: Bearer {token} (Replace {token} with the admin or user token obtained from the authentication step)
Path Parameters: Replace {tagId} with the ID of the tag you want to delete.
Expected Behavior:
If the request is successful, you should receive a success message in the response body.
Status code: 204 No Content
