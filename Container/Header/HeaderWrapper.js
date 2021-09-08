import styled from 'styled-components'

const HeaderWrapper = styled.header`
.headermain{
    display: flex;
    align-items: center;
    padding:18px 0;
  
}
header{
    position:sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
  box-shadow:0 1px 30px 0px;
  width:100%;
}
.logo1{
    width:30px;
}
.imgh2 {
    font-weight: bold;
    color: rgb(255, 208, 0);
    display: flex;
    align-items: center;
    margin-left:20px;
    font-size: 10px;
}
.icon1 {
    margin-left: 10px;
    margin-bottom: 8px;
}
.iconcs1:hover{
    color:rgb(255, 208, 0);
}
.iconcs1:hover .icon2{
    display:block;
}
.iconcs1:hover .icon3{
    display:none;
}
.icon2{
display:none;
}
.ul1{
    margin-bottom: 8px;
    display: flex;
    align-items: center;
   
}
.li1{
margin-left:30px;
}
.li1:hover{
    color:rgb(224, 191, 3);
}

.card1 {
    display:none;
    border: 1px solid black;
    box-shadow: 2px 10px 20px 2px black;
    width: 200px;
    height: 300px;
}
.butn1{
    rgb(255, 208, 0) 
    color:black;
    margin-right:15px;
}
.last{
    margin-right:15px;
 
}
.butn2{
    background-color:rgb(255, 208, 0); 
    border:none;
    color:black;
    margin-right:10px;
}
.butn2:hover{
    background-color:rgb(224, 185, 8); 
}
.dropdawn{
    display:none;
    background-color: aqua;
    border-radius: 20px;
}
.iconcs1:hover .dropdawn{
    display: block;
    position: absolute;
    background-color: white;
    width:780px;
    margin-top:30px;
    box-shadow: 0 2px 6px 2px rgb(204, 200, 200);
}
.drop1{
    cursor: pointer;
    color: rgb(60, 60, 99);
    width:220px;
    padding:5px;
    margin-top:10px;
}
.drop1:hover{
    background-color: rgb(202, 202, 209);
    border-radius:10px;
}
.drop1:hover .text-warning{
    padding-left:6px;
}
.icon7{
    display:none;
}
.alls:hover .icon7{
    display:block;
    color:rgb(255, 208, 0);
}
.alls:hover .icon6{
    display:none;
}
.newli1{
    display:flex;
    align-items:center;
}
.dropdawn2{
    display:none;
    background-color: aqua;
    border-radius: 20px;
            
}
.alls:hover .dropdawn2{
    display: block;
    position: absolute;
    background-color: white;
    width:300px;
    margin-top:30px;
    box-shadow: 0 2px 6px 2px rgb(204, 200, 200);
    height:360px;
margin-left:-200px;
}
.drop2{
    cursor: pointer;
    color: rgb(60, 60, 99);
    width:250px;
    padding:5px;
}
.drop2:hover{
    background-color: rgb(202, 202, 209);
    border-radius:10px;
}
.headerwrite{
    font-size:12px;
}
li{
    list-style-type: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
  

`
export default HeaderWrapper