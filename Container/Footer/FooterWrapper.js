import styled from 'styled-components'
const FooterWrapper = styled.div`
footer{
    margin-top:30px;
    width:100%;
    height:50%;
    background-color: black;
    border-top:2px solid brown;
  }
  .lis{
    color:white;
    list-style-type: none;
    margin-bottom:10px;
  }
  .foot{
    margin-top:100px;
    display:block;
    margin-left:100px;
  }
  .listhead1{
    color:white;
    display:block;
    list-style-type: none;
  
  }
  .listhead1:hover{
  color:rgb(230, 216, 216);
  }
  .lis:hover{
    color:rgb(230, 216, 216);
    }
    .photo {
      width:50px;
      height:50px;
      border-radius:50%;
    }
    .logos{
      margin-top:100px;
  
    }
`
export default FooterWrapper