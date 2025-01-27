import {body} from "express-validator"

const userValidator=[
    body("name").isAlpha("de-DE",{ignore:" "}).withMessage("your real Name please!"),
    body("familyName").isAlpha("de-DE",{ignore:" "}).withMessage("your real Name please!"),
    body("email").isEmail().withMessage("incorrect Email"),
    body("password").isStrongPassword().optional({nullable: true}).withMessage("password is to weak!"),
    body("userName").isAlphanumeric("de-DE",{ignore:" ,.-!?"}).withMessage("only Chars and Numbers please!"),
    body("street").isAlpha("de-DE",{ignore:" .-"}).withMessage("your real Street please!"),
    body("number").isNumeric().withMessage("only the Number please!"),
    body("city").isAlpha("de-DE",{ignore:" -"}).withMessage("type in your city!"),
    body("zipCode").isNumeric().withMessage("only the Number please!"),
    body("country").isAlpha().withMessage("choose your country!")
]

export default userValidator