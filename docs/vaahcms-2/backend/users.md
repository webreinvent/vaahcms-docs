# Users

[[toc]]

## Purpose
User Management is a system for authenticating users and storing user data. As of now, `VaahCMS` has two Login option: `Login via Password` and `Login via OTP`. In VaahCMS, you can manage all aspects of your user accounts such as changing user properties, reset password, enable or disable users, and more.

## Features & Demos

#####  User Listing

Get a list of all your users, and their data in one place. The Users table contains all of your user data and the `VaahCms` puts all user management functions right at your fingertips. You have the ability to `add`, `edit`, and `delete` users. You can also `search`, `sort`, and `filter` your user data and modify user information and `roles`, all in the same place.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_TIKvbvuNdu.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

---

##### Create a User 

You can view the video attached below to learn how to create a new user.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_f9KBTI8yTZ.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

---

##### Manage User Roles

You can assign roles to a user in `Users` section. By clicking on `Role` column, a page will open that contain list of Roles along with `Yes/No` Button.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_IUIS4wUJh0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>


## Required User Permissions To Access This Section


| Permissions          | Description                                           |
| ------------- | ------------------------------------------------------------ |
|Has Access Of Users Section           | This will allow user to see the link of user section.        |
| Can Create Users                      | This will allow user to add anything in the user section.    |
| Can Read Users                        | This will allow user to view anything in the user section.   |
| Can Update Users                      | This will allow user to edit anything in the user section.   |
| Can Delete Users                      | This will allow user to delete anything in the user section. |
| Can Manage Users                      | This will allow user to manage anything in the user section. |
| Can See Users Contact Details         | This will allow user to view contact (email, mobile) detail in the user section. |

## Files

- Laravel Route: `vaahcms/Routes/backend/route-users.php`
- Laravel Controller: `vaahcms/Http/Controllers/Backend/UsersController.php`
- Laravel Model: `vaahcms/Models/User.php`
- Vue Route: `vaahcms/Vue/routes/vue-routes-users.js`
- Vue Store: `vaahcms/Vue/stores/store-users.js`
- Vue Page Directory: `vaahcms/Vue/pages/users`

## Methods

###### Accessors

To know about `Accessors`, see [Laravel Documentation](https://laravel.com/docs/8.x/eloquent-mutators#defining-an-accessor)

| Method Name        | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| getAvatarAttribute | Get value of `avatar_url` column from database or `Gravatar` url. To know about Gravatar, [click here](https://en.gravatar.com/) |
| getMetaAttribute   | Get value of `meta` column in JSON                           |
| getNameAttribute   | Get value of `display_name` column or joined string of `first_name`, `middle_name` and `last_name` column from database. |


------

###### Mutators

To know about `Mutators`, see [Laravel Documentation](https://laravel.com/docs/8.x/eloquent-mutators#defining-a-mutator)

| Method Name            | Parameter | Description                                                  |
| ---------------------- | --------- | ------------------------------------------------------------ |
| setMetaAttribute       | `$value`  | Set json encoded value in `meta` column                      |
| setFirstNameAttribute  | `$value`  | Set first character of First Name capitalized                |
| setMiddleNameAttribute | `$value`  | Set first character of Middle Name capitalized               |
| setLastNameAttribute   | `$value`  | Set first character of Last Name capitalized                 |
| setPasswordAttribute   | `$value`  | Hashing of Password. `prevent_password_attr_set` This variable is defined to ignore this mutator. |
| setLoginOtpAttribute   | `$value`  | Hashing of Login OTP code                                    |

------

###### Scopes

To know about `Scopes`, see [Laravel Documentation](https://laravel.com/docs/8.x/eloquent#dynamic-scopes)

| Method Name       | Parameter                | Description                                                  |
| ----------------- | ------------------------ | ------------------------------------------------------------ |
| scopeIsActive     | `$query`                 | Return Active User (is-active == 1)                          |
| scopeBetweenDates | `$query`  `$from`  `$to` | Return User which is created between `$from` date & `$to` date |
| scopeExclude      | `$query`  `$columns`     | The array in `$columns` parameter is exclude from select query. |

------

###### Relationships

To know about `Relationships`, see [Laravel Documentation](https://laravel.com/docs/8.x/eloquent-relationships#defining-relationships)

| Method Name   | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| createdByUser | Return data of `User` model that has an id which matches the `created_by` column of User. |
| updatedByUser | Return data of `User` model that has an id which matches the `updated_by` column of User. |
| deletedByUser | Return data of `User` model that has an id which matches the `deleted_by` column of User. |
| roles         | Return data of `Role` model with `Pivot` that is assigned to Users. |



------



###### Non Static

| Method Name            | Parameter                      | Description                                                  |
| ---------------------- | ------------------------------ | ------------------------------------------------------------ |
| getTableColumns        |                                | Get array of all columns name in User table.                 |
| getFormFillableColumns |                                | Get array of some column name in User table.                 |
| activeRoles            |                                | Return active Roles of User.                                 |
| hasRole                | `$role_slug`                   | Return `true` if role in `$role_slug` is active.             |
| isAdmin                |                                | Return `true` if `Administrator` role is active.             |
| hasPermission          | `$permission_slug`  `$details` | Return `true` if permission in `$permission_slug` is active and their associated role is active. |



------



###### Static

| Method Name          | Parameter                            | Description                                                  |
| -------------------- | ------------------------------------ | ------------------------------------------------------------ |
| findByUsername       | `$username`  `$columns = array('*')` | The `findByUsername` method find users only by the `username` and return given columns. |
| findByEmail          | `$email`  `$columns = array('*')`    | The `findByEmail` method find users only by the `email` and return given columns. |
| countAdministrators  |                                      | The `countAdministrators` method return number of users which has `Administrator` role. |
| getByRoles           | `$array_role_slugs`                  | The `getByRoles` method return a list of the users which has a role exists in `$array_role_slugs`. |
| getByRolesOnlyIds    | `$array_role_slugs`                  | The `getByRolesOnlyIds` method return only `id` of the users which has a role exists in `$array_role_slugs`. |
| getByRolesOnlyEmails | `$array_role_slugs`                  | The `getByRolesOnlyEmails` method return only `email` of the users which has a role exists in `$array_role_slugs`. |
| rulesAdminCreate     |                                      | The `rulesAdminCreate` method return the array of validation rules for User. |
| isLastAdmin          |                                      | The `isLastAdmin` method return `true` if Application has only one User of Administrator role. |
| getAvatarById        | `$id`                                | The `getAvatarById` method find users only by the `id` and return avatar url. |
| getUsersForAssets    |                                      | The `getUsersForAssets` method return list of `active` users with following columns: `id`, `first_name`, `middle_name`, `last_name` |


## API
<!-- 
REMOVE THIS COMMENT

Example

### Create permission

##### Method: `post`
##### URL: `<public-url>/api/permission/create`
##### Request Parameters
List all request params like https://docs.vaah.dev/vaahcms/basic/api.html#get-a-list 
##### Response Parameters
##### Sample Request
##### Sample Response
-->