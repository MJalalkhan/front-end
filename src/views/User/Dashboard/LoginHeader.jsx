const LoginHeader = () => {
    return ( 
        <>
     <header class="section-header">
        <section class="header-main border-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-3 col-md-12">
                    <a href="/" class="brand-wrap" style={{fontSize:"25px"}}>
                       <b>OnliteShop.pk</b>
                    </a> 
                </div>
              
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="widgets-wrap float-md-right">
                        <div class="widget-header mr-3">
                            <a href="#" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-user"></i>
                                    <span class="notify">3</span>
                                </div>
                                <small class="text"> My profile </small>
                            </a>
                        </div>
                      
                    </div> 
                </div>
            </div>
        </div> 
    </section> 
    </header>

</>

     );
}
 
export default LoginHeader;