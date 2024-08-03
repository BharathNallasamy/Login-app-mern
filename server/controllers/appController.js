/** POST http://localhost:3000/api/register
 * @param: {
 * "username" : "test@123",
 * "password" : "test@123",
 * "email" : "test@gmail.com",
 * "firstName" : "test",
 * "lastName" : "one",
 * "mobile" : "654465646",
 * "address" : "1513/26, Patala eswari kovil, dindigul",
 * "profit": ""
 * }
 */
export async function register(req, res) {
  res.json("Register route");
}

/** POST: http://localhost:3000/api/login
 * @param: {
 *  "username" :"test",
 *  "password" : "teashdslsd"
 * }
 */
export async function login(req, res) {
  res.json("Login route");
}

/** GET: http://localhost:3000/api/user/test123 */
export async function getUser(req, res) {
  res.json("getUser route");
}

/** PUT: http://localhost:3000/api/updateUser
 * @params :{
 * "id":"<userId>"
 * }
 * body: {
 * firstName: '',
 * lastName: '',
 * profile: '',
 * }
 */
export async function updateUser(req, res) {
  res.json("getUser route");
}

/** GET: http://localhost:3000/api/generateOTP */
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

/** GET: http://localhost:3000/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:3000/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

// update the password when we have valid session
/** PUT: http://localhost:3000/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
