import styled from 'styled-components'

const MainWrapper = styled.div`
.sidebar{
    position:sticky;
    width: 0px;
    height: 20px;
    background-color: black;
    transition:0.5s;
    flex-shrink:0;
    overflow:hidden;
    &.show{
      width: 140px;
      height: 60vh;
      background-color: black;
      color:rgb(224, 185, 8);   
      padding:10px;
      cursor:pointer;
      border-bottom-right-radius: 80px;
  }
  }
  .contain{
   flex:1;
  }
  .show:hover{
    background-color: rgb(63, 61, 61);
    color:rgb(168, 139, 10);
  }
  
`
export default MainWrapper