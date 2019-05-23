/* Creating, Reading and Deleting Cookies. */


// Cookie Creation
document.cookie = "username = AniketDVD; codedIn: JavaScript;"


// Telling browser the Cookie path.
document.cookie = "username = AniketDVD; codedIn: JavaScript; path=/;";


// Reading a Cookie.
var _cookie = document.cookie; 
// '_cookie' contains all data in a single string returned by 'document.cookie'.


// Changing a Cookie.
document.cookie = "username = aniketDwivedi; codedIn: JavaScript; path=/;";
//Results in overwrting of old cookie.

// Deleting a Cookie.
document.cookie = "username =; codedIn =; path=/;";