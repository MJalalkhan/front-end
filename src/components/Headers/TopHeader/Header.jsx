const Header = () => {
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
                <div class="col-xl-6 col-lg-5 col-md-6">
                    <form action="#" class="search-header">
                        <div class="input-group w-100">
                            <input type="text" class="form-control" placeholder="Search" />
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="submit">
                                <i class="fa fa-search"></i> Search
                              </button>
                            </div>
                        </div>
                    </form> 
                </div> 
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="widgets-wrap float-md-right">
                        <div class="widget-header mr-3">
                        <button type="button" class="btn btn-outline-primary">
                        <a href="/sign-in"><b>Login/SignUp</b></a>
                            </button>
                        </div>
                        <div class="widget-header">
                            <a href="/cart" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-shopping-cart"></i>
                                </div>
                                <small class="text"> Cart </small>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </section> 
    

    <nav class="navbar navbar-main navbar-expand-lg border-bottom">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="main_nav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">ALL PRODUCTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">WOMEN FASHION</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">SPORTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">BABIES $ KIDS</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">ELECTRONICS</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">MENS FASHION</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">HOME APPLIANCES</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">STATIONARY</a>
            </li>
        </ul>
        
        </div> 
    </div> 
    </nav> 
</header>
</>

     );
}
 
export default Header;