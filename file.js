

<div id="c">
  <div class="c1 top"></div>
  <div class="c2 top"></div>
  <div class="r1"></div>
</div>
<style>
<div id="c">
  <div class="c1 top"></div>
  <div class="c2 top"></div>
  <div class="r1"></div>
</div>    
 
  #c{
    display:flex;
  }
  .c1,.c2 {
    width: 120px;
    height: 120px;
    background: #E0E7FF;
    border:40px, solid;
    border-radius:150px;
  }
  .c2{
    margin-left:-50px
  }
  .top {
    border-color:#4F77FF;
  }
  .r1{
    width:100%;
    height:50px;
    position:absolute;
    z-index:1;
    background:#E0E7FF;
    margin-top:75px;
  }
</style>