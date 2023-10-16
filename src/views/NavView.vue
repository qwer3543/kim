<script setup>
        var navbarStyle = localStorage.getItem("navbarStyle");
        if (navbarStyle && navbarStyle !== 'transparent') {
            document.querySelector('.navbar-vertical').classList.add(`navbar-${navbarStyle}`);
        }
</script>
<!-- 사이드바 영역 -->
<template>
    <nav class="navbar navbar-light navbar-vertical navbar-expand-xl">
        <div class="d-flex align-items-center"> <!-- 탭 버튼 영역 -->
            <div class="toggle-icon-wrapper">
                <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation">
                    <span class="navbar-toggle-icon">
                        <span class="toggle-line"></span>
                    </span>
                </button>
            </div>
            <a class="navbar-brand" href="../../index.html">
                <div class="d-flex align-items-center py-3">
                    <img class="me-2" src="../../assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" />
                    <span class="font-sans-serif text-primary">BLPS&C</span>
                </div>
            </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div class="navbar-vertical-content scrollbar">
                <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                    <!-- ================================================================================== # TEST # -->
                    <li class="nav-item">
                        <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                            <div class="col-auto navbar-vertical-label">TEST</div>
                            <div class="col ps-0">
                                <hr class="mb-0 navbar-vertical-divider" />
                            </div>
                        </div>
                        <!-- ================================================================== T_1 -->
                        <a class="nav-link" href="#" role="button">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-calendar-alt"></span>
                                </span>
                                <span class="nav-link-text ps-1">T_1</span>
                            </div>
                        </a>
                        <!-- ================================================================== T_2 -->
                        <a class="nav-link dropdown-indicator" href="#T_2" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="T_2">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-envelope-open"></span>
                                </span>
                                <span class="nav-link-text ps-1">T_2</span>
                            </div>
                        </a>
                        <ul class="nav collapse" id="T_2">
                            <li class="nav-item"> <!-- 2-1 -->
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">T_2-1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <!-- ================================================================== T_3 -->
                        <a class="nav-link dropdown-indicator" href="#T_3" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="T_3">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-shopping-cart"></span>
                                </span>
                                <span class="nav-link-text ps-1">T_3</span>
                            </div>
                        </a>
                        <ul class="nav collapse" id="T_3">
                            <li class="nav-item"> <!-- 3-1 -->
                                <a class="nav-link dropdown-indicator" href="#T_3-1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="T_3">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">T_3-1</span>
                                    </div>
                                </a>
                                <ul class="nav collapse" id="T_3-1">
                                    <li class="nav-item"> <!-- 1 -->
                                        <a class="nav-link" href="#">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">1</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item"> <!-- 3-2 -->
                                <a class="nav-link dropdown-indicator" href="#T_3-2" data-bs-toggle="collapse" aria-expanded="false" aria-controls="T_3">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">T_3-2</span>
                                    </div>
                                </a>
                                <ul class="nav collapse" id="T_3-2">
                                    <li class="nav-item"> <!-- 1 -->
                                        <a class="nav-link" href="#">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">1</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item"> <!-- 2 -->
                                        <a class="nav-link" href="#">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">2</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item"> <!-- 3-3 -->
                                <a class="nav-link" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">T_3-3</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <!-- ================================================================== T_4 -->
                        <a class="nav-link" href="#" role="button">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-graduation-cap"></span>
                                </span>
                                <span class="nav-link-text ps-1">T_4</span>
                                <span class="badge rounded-pill ms-2 badge-subtle-success">New</span>
                            </div>
                        </a>
                    </li>
                    <!-- ================================================================================== # OMS # -->
                    <li class="nav-item">
                        <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                            <div class="col-auto navbar-vertical-label">OMS</div>
                            <div class="col ps-0">
                                <hr class="mb-0 navbar-vertical-divider" />
                            </div>
                        </div>
                        <!-- ================================================================== O_1 -->
                        <a class="nav-link" href="#" role="button">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-flag"></span>
                                </span>
                                <span class="nav-link-text ps-1">O_1</span>
                            </div>
                        </a>
                        <!-- ================================================================== O_2 -->
                        <a class="nav-link dropdown-indicator" href="#OMS" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="OMS">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="far fa-window-restore"></span>
                                </span>
                                <span class="nav-link-text ps-1">O_2</span>
                            </div>
                        </a>
                        <ul class="nav collapse" id="OMS">
                            <li class="nav-item"> <!-- 1 -->
                                <a class="nav-link" href="#" target="_blank"> <!-- target="_blank" 페이지 생성됨 -->
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">1</span>
                                        <span class="badge rounded-pill ms-2 badge-subtle-success">TEST</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- ================================================================================== # WMS # -->
                    <li class="nav-item">
                        <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                            <div class="col-auto navbar-vertical-label">WMS</div>
                            <div class="col ps-0">
                                <hr class="mb-0 navbar-vertical-divider" />
                            </div>
                        </div>
                        <!-- ================================================================== W_1 -->
                        <a class="nav-link dropdown-indicator" href="#WMS" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="WMS">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-table"></span>
                                </span>
                                <span class="nav-link-text ps-1">W_1</span>
                            </div>
                        </a>
                        <ul class="nav collapse" id="WMS">
                            <li class="nav-item"> <!-- 1 -->
                                <a class="nav-link active" href="#">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <!-- ================================================================== LEV -->
                        <a class="nav-link dropdown-indicator" href="#LEV" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-layer-group"></span>
                                </span>
                                <span class="nav-link-text ps-1">LEV</span>
                            </div>
                        </a>
                        <ul class="nav collapse" id="LEV">
                            <!-- LEV_1 -->
                            <li class="nav-item"> 
                                <a class="nav-link dropdown-indicator" href="#LEV_1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">LEV_1</span>
                                    </div>
                                </a>
                                <ul class="nav collapse" id="LEV_1">
                                    <li class="nav-item"> <!-- 1 -->
                                        <a class="nav-link" href="../../#!.html">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">1</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item"> <!-- 2 -->
                                        <a class="nav-link" href="../../#!.html">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">2</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <!-- LEV_2 -->
                            <li class="nav-item"> 
                                <a class="nav-link dropdown-indicator" href="#LEV_2" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">LEV_2</span>
                                    </div>
                                </a>
                                <ul class="nav collapse" id="LEV_2">
                                    <li class="nav-item"> <!-- 1 -->
                                        <a class="nav-link" href="../../#!.html">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">1</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item"> <!-- 2 -->
                                        <a class="nav-link dropdown-indicator" href="#2-1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">2</span>
                                            </div>
                                        </a>
                                        <ul class="nav collapse" id="2-1">
                                            <li class="nav-item"> <!-- 2-1 -->
                                                <a class="nav-link" href="../../#!.html">
                                                    <div class="d-flex align-items-center">
                                                        <span class="nav-link-text ps-1">2-1</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item"> <!-- 2-2 -->
                                                <a class="nav-link" href="../../#!.html">
                                                    <div class="d-flex align-items-center">
                                                        <span class="nav-link-text ps-1">2-2</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <!-- LEV_3 -->
                            <li class="nav-item"> 
                                <a class="nav-link dropdown-indicator" href="#LEV_3" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-text ps-1">LEV_3</span>
                                    </div>
                                </a>
                                <ul class="nav collapse" id="LEV_3">
                                    <li class="nav-item"> <!-- 1 -->
                                        <a class="nav-link" href="../../#!.html">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">1</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item"> <!-- 2 -->
                                        <a class="nav-link dropdown-indicator" href="#2" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                                            <div class="d-flex align-items-center">
                                                <span class="nav-link-text ps-1">2</span>
                                            </div>
                                        </a>
                                        <ul class="nav collapse" id="2">
                                            <li class="nav-item"> <!-- 2-1 -->
                                                <a class="nav-link" href="../../#!.html">
                                                    <div class="d-flex align-items-center">
                                                        <span class="nav-link-text ps-1">2-1</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item"> <!-- 2-2 -->
                                                <a class="nav-link dropdown-indicator" href="#2-2" data-bs-toggle="collapse" aria-expanded="false" aria-controls="LEV">
                                                    <div class="d-flex align-items-center">
                                                        <span class="nav-link-text ps-1">2-2</span>
                                                    </div>
                                                </a>
                                                <ul class="nav collapse" id="2-2">
                                                    <li class="nav-item"> <!-- 2-2-1 -->
                                                        <a class="nav-link" href="../../#!.html">
                                                            <div class="d-flex align-items-center">
                                                                <span class="nav-link-text ps-1">2-2-1</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item"> <!-- 2-2-2 -->
                                                        <a class="nav-link" href="../../#!.html">
                                                            <div class="d-flex align-items-center">
                                                                <span class="nav-link-text ps-1">2-2-2</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- # 광고 #
                <div class="settings mb-3">
                    <div class="card shadow-none">
                        <div class="card-body alert mb-0" role="alert">
                        <div class="btn-close-falcon-container">
                            <button class="btn btn-link btn-close-falcon p-0" aria-label="Close" data-bs-dismiss="alert"></button>
                        </div>
                        <div class="text-center"><img src="../../assets/img/icons/spot-illustrations/navbar-vertical.png" alt="" width="80" />
                            <p class="fs--2 mt-2">Loving what you see? <br />Get your copy of <a href="#!">Falcon</a></p>
                            <div class="d-grid"><a class="btn btn-sm btn-primary" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/" target="_blank">Purchase</a></div>
                        </div>
                        </div>
                    </div>
                </div> 
                -->
            </div>
        </div>
    </nav>
</template>