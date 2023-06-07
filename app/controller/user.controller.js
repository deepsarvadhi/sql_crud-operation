const express = require('express');
const mysql = require('mysql');
const connection = require('../../config/connection');
const HTTP = require('../../constants/responseCode.constant');

async function addData(req, res) {
    try {
        let { name, email, password, role } = req.body;
        var sql = `INSERT INTO user (name, email, password, role) VALUES ('${name}','${email}','${password}','${role}')`;

        if (!name || !email || !password || !role) {
            return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.NOT_FOUND, message: "All fialds are reqide", data: {} });
        }

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return res.status(HTTP.SUCCESS).send({ status: false, code: HTTP.BAD_REQUEST, message: "Data not inserted", data: {} });
            }
            return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data inserted", data: {} });
        });

    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:7 ~ addData ~ error:", error);
    }
}

async function viewUserInfo(req, res) {
    try {
        var sql = "SELECT * FROM `user` WHERE 1";

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return res.status(HTTP.SUCCESS).send({ status: false, code: HTTP.BAD_REQUEST, message: "Data not Show", data: {} });
            }
            return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data", data: data });
        });

    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:35 ~ viewUserInfo ~ error:", error);

    }
}

async function editUserInfo(req, res) {
    try {

        let { name, email, password, id } = req.body;

        const sql = `UPDATE user SET  name='${name}', email='${email}', password='${password}' WHERE id = ${id}`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return res.status(HTTP.SUCCESS).send({ status: false, code: HTTP.BAD_REQUEST, message: "Data not update", data: {} });
            }
            return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data update", data: {} });
        });

    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:56 ~ editUserInfo ~ error:", error);

    }
}

async function deleteUser(req, res) {
    try {
        var id = req.body.id;
        var sql = `DELETE FROM user WHERE id = ${id}`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log("🚀 ~ file: user.controller.js:18 ~ connection.query ~ err:", err);
            }

            if (!data) {
                return res.status(HTTP.SUCCESS).send({ status: false, code: HTTP.BAD_REQUEST, message: "Data not delete", data: {} });
            }
            return res.status(HTTP.SUCCESS).send({ status: true, code: HTTP.SUCCESS, message: "Data delete successful", data: {} });
        });

    } catch (error) {
        console.log("🚀 ~ file: user.controller.js:80 ~ deleteUser ~ error:", error);

    }
}

module.exports = {
    addData,
    viewUserInfo,
    editUserInfo,
    deleteUser
};