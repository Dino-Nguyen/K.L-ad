import styled from "styled-components";

export const StyleSignIn = styled.div`
.auth-layout-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 30px; 
}
.auth-layout-wrap img {
    width : 150px;
}
.selected {
    display: flex;
   flex-direction: row;
   padding: 0px;
   gap: 80px;
}
.selected label {
    font-weight: 600;
   font-size: 14px;
   color: #4D4D4D;
}
#employeeLogin {
    width: 18px;
    height: 18px;
    margin-right :3px;
    margin-bottom :2px;
    cursor: pointer;
}
#adminLogin {
    width: 18px;
    height: 18px;
    margin-right :3px;
    margin-bottom :2px;
    cursor: pointer;
}

#formLogin {
    width: 320px;
    margin-top : -20px;
}
#adminLoginForm {
    display: none;
}
.form-group label {
    width: 205px;
  height: 20px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #4D4D4D;
margin-top: 20px;
}
.form-control {
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    background-color: #E5E5E5
    height: 40px
}
#eye-password {
    width: 18px;
    height: 18px; 
    float: right; 
    margin-top: -30px;
    margin-right:10px;
    cursor: pointer;
}
.rememberBox {
    display: flex;
    margin-top: 25px;
    margin-bottom:20px;
}
.remember{
   display: flex;
   align-items :center;
}
.remember label{
    margin-left: 3px;
}
.forgot {
    margin-left: 95px;
    width: 153px;
    height: 19px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 19px;

color: #00CDC2;
text-align: right;
text-decoration-line: underline;

}
#btn-login {
    background: linear-gradient(0deg, #00CDC2, #00CDC2), #FFFFFF;
    border :none
    height: 40px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    margin-top: 20px;
}
.auth-right {
    margin-top: -15px;
    margin-left:10px
}
#btn-signUpNew {
   
height: 19px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #00CDC2;
margin-top: -20px;
}
.forget-pass-text {
    width : 330px;
    text-align : center;
    color: #4D4D4D;
    font-size: 12px;
    margin-top: -10px;
}
.already-have {
    display : flex;
    flex-direction: row;
    
    text-align: center;
}
.return-login {
    margin-left: 10px;
    margin-bottom: -20px;
}
.digits-code-text {
    font-family: 'Quicksand';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
margin-top: -15px;
}
.digits-code-group {
    width: 320px;
    display: flex;
    flex-direction: colunm;
    justify-content: space-between;
    margin: 20px 0px;
}
.digits-code {
    border: none;
  background: #E5E5E5;
  border-radius: 5px;
  width : 33px;
  height:40px;
}
.resend-code {
    font-weight: 700;
font-size: 12px;
line-height: 19px;
color: #00CDC2;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;
margin-top: -10px;
cursor: pointer;
}
#success-pic {
     height: 100px;
     width: 100px;
     margin 20px 0px;
     margin-left: 110px;
}
.sign-up-container {
    display:flex;
    margin: 10px 0px ;
    width: 700px;
    margin-left:-190px;

}
.sign-up-box {
    width: 300px ;
    
}
.sign-up-box2 {
    border-left: 2px solid #B3B3B3;
    margin-left:50px;
    padding-left: 50px;
    width: 350px
}
#org-country {
    width: 300px;
    
}
#select-country {
    background: #E5E5E5;
    border-radius: 5px;
}

`
