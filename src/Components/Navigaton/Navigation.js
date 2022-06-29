import React from 'react';

const Navigation = () => {
    return (
        <div style={{marginTop:"-25px"}}>
            <nav class="navbar navbar-expand-lg"style={{ backgroundColor:'red'}}>
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item text-white" href="/">Action</a></li>
                                    <li><a class="dropdown-item text-white" href="/">Another action</a></li>
                                    <li><a class="dropdown-item text-white" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;