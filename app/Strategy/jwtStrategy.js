// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// const jwtOptions = {
// //   secretOrKey: config.jwt.secret,
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// };

// const jwtVerify = async (payload, done) => {
//   try {
//     const user = await User.findById(payload.id);
//     if (!user) {
//       return done(null, false);
//     }
//     done(null, user);
//   } catch (error) {
//     done(error, false);
//   }
// };

// const jwtStrategy = new Strategy(jwtOptions, jwtVerify);

// module.exports = jwtStrategy;
