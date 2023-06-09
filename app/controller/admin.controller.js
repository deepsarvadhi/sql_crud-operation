const express = require('express');
const mysql = require('mysql');
const connection = require('../../config/connection');
const HTTP = require('../../constants/responseCode.constant');

// (async function deafultAdminsignup(req, res) {
//     try {
//       const adminData = {
//         username: "admin",
//         email: "larosa.admin@yopmail.com",
//         role: "admin",
//       };
//       const password = "larosaadmin@123";
//       // const encData = await encryptUserModel(adminData)
//       const existsAdmin = await Register.findOne({
//         email: adminData.email,
//         role: adminData.role,
//       });

//       //Admin exist
//       if (existsAdmin) return;

//       const userData = await new Register({
//         ...adminData,
//         password: hashSync(password.trim(), 8),
//         isVerified: true,
//       }).save();
//       if (!userData) console.log("Unable to add default admin");

//       return;
//     } catch (e) {
//       console.log(e);
//       return;
//     }
//   })();


(async function deafultAdminsignup(req, res) {
    try {
        // var sql = `INSERT INTO 'admin' ( 'name', 'email', 'password', 'role') VALUES ('Admin','Admin@gmail.com','Admin@123','Admin')`;
        var sql = `INSERT INTO admin (name, email, password, role) VALUES ('Admin', 'Admin@gmail.com', 'Admin@123', 'Admin')`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return false;
            }
            return true;
        });

        //Admin exist
        var sqlcheck = `SELECT * FROM admin WHERE email = 'Admin@gmail.com'`

        connection.query(sqlcheck, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (data) {
                return false;
            }
            return true;
        });

    } catch (error) {
        console.log("🚀 ~ file: admin.controller.js:39 ~ deafultAdminsignup ~ error:", error)
    }
})();