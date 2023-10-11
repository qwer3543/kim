<!-- 탑 영역 -->
<template>
    <div class="content">
        <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">

        <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
        <a class="navbar-brand me-1 me-sm-3" href="../../index.html">
            <div class="d-flex align-items-center"><img class="me-2" src="../../assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" /><span class="font-sans-serif text-primary">falcon</span>
            </div>
        </a>
        <ul class="navbar-nav align-items-center d-none d-lg-block">
            <li class="nav-item">
            <div class="search-box" data-list='{"valueNames":["title"]}'>
                <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
                <input class="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
                <span class="fas fa-search search-box-icon"></span>

                </form>
                <div class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none" data-bs-dismiss="search">
                <button class="btn btn-link btn-close-falcon p-0" aria-label="Close"></button>
                </div>
                <div class="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                <div class="scrollbar list py-3" style="max-height: 24rem;">
                    <h6 class="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Recently Browsed</h6><a class="dropdown-item fs--1 px-x1 py-1 hover-primary" href="../../app/events/event-detail.html">
                    <div class="d-flex align-items-center">
                        <span class="fas fa-circle me-2 text-300 fs--2"></span>

                        <div class="fw-normal title">Pages <span class="fas fa-chevron-right mx-1 text-500 fs--2" data-fa-transform="shrink-2"></span> Events</div>
                    </div>
                    </a>
                    <a class="dropdown-item fs--1 px-x1 py-1 hover-primary" href="../../app/e-commerce/customers.html">
                    <div class="d-flex align-items-center">
                        <span class="fas fa-circle me-2 text-300 fs--2"></span>

                        <div class="fw-normal title">E-commerce <span class="fas fa-chevron-right mx-1 text-500 fs--2" data-fa-transform="shrink-2"></span> Customers</div>
                    </div>
                    </a>

                    <hr class="text-200 dark__text-900" />
                    <h6 class="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Suggested Filter</h6><a class="dropdown-item px-x1 py-1 fs-0" href="../../app/e-commerce/customers.html">
                    <div class="d-flex align-items-center"><span class="badge fw-medium text-decoration-none me-2 badge-subtle-warning">customers:</span>
                        <div class="flex-1 fs--1 title">All customers list</div>
                    </div>
                    </a>
                    <a class="dropdown-item px-x1 py-1 fs-0" href="../../app/events/event-detail.html">
                    <div class="d-flex align-items-center"><span class="badge fw-medium text-decoration-none me-2 badge-subtle-success">events:</span>
                        <div class="flex-1 fs--1 title">Latest events in current month</div>
                    </div>
                    </a>
                    <a class="dropdown-item px-x1 py-1 fs-0" href="../../app/e-commerce/product/product-grid.html">
                    <div class="d-flex align-items-center"><span class="badge fw-medium text-decoration-none me-2 badge-subtle-info">products:</span>
                        <div class="flex-1 fs--1 title">Most popular products</div>
                    </div>
                    </a>

                    <hr class="text-200 dark__text-900" />
                    <h6 class="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Files</h6><a class="dropdown-item px-x1 py-2" href="#!">
                    <div class="d-flex align-items-center">
                        <div class="file-thumbnail me-2"><img class="border h-100 w-100 object-fit-cover rounded-3" src="../../assets/img/products/3-thumb.png" alt="" /></div>
                        <div class="flex-1">
                        <h6 class="mb-0 title">iPhone</h6>
                        <p class="fs--2 mb-0 d-flex"><span class="fw-semi-bold">Antony</span><span class="fw-medium text-600 ms-2">27 Sep at 10:30 AM</span></p>
                        </div>
                    </div>
                    </a>
                    <a class="dropdown-item px-x1 py-2" href="#!">
                    <div class="d-flex align-items-center">
                        <div class="file-thumbnail me-2"><img class="img-fluid" src="../../assets/img/icons/zip.png" alt="" /></div>
                        <div class="flex-1">
                        <h6 class="mb-0 title">Falcon v1.8.2</h6>
                        <p class="fs--2 mb-0 d-flex"><span class="fw-semi-bold">John</span><span class="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span></p>
                        </div>
                    </div>
                    </a>

                    <hr class="text-200 dark__text-900" />
                    <h6 class="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Members</h6><a class="dropdown-item px-x1 py-2" href="../../pages/user/profile.html">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-l status-online me-2">
                        <img class="rounded-circle" src="../../assets/img/team/1.jpg" alt="" />

                        </div>
                        <div class="flex-1">
                        <h6 class="mb-0 title">Anna Karinina</h6>
                        <p class="fs--2 mb-0 d-flex">Technext Limited</p>
                        </div>
                    </div>
                    </a>
                    <a class="dropdown-item px-x1 py-2" href="../../pages/user/profile.html">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-l me-2">
                        <img class="rounded-circle" src="../../assets/img/team/2.jpg" alt="" />

                        </div>
                        <div class="flex-1">
                        <h6 class="mb-0 title">Antony Hopkins</h6>
                        <p class="fs--2 mb-0 d-flex">Brain Trust</p>
                        </div>
                    </div>
                    </a>
                    <a class="dropdown-item px-x1 py-2" href="../../pages/user/profile.html">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-l me-2">
                        <img class="rounded-circle" src="../../assets/img/team/3.jpg" alt="" />

                        </div>
                        <div class="flex-1">
                        <h6 class="mb-0 title">Emma Watson</h6>
                        <p class="fs--2 mb-0 d-flex">Google</p>
                        </div>
                    </div>
                    </a>

                </div>
                <div class="text-center mt-n3">
                    <p class="fallback fw-bold fs-1 d-none">No Result Found.</p>
                </div>
                </div>
            </div>
            </li>
        </ul>
        <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
            <li class="nav-item ps-2 pe-0">
            <div class="dropdown theme-control-dropdown"><a class="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-0 pe-1 py-0" href="#" role="button" id="themeSwitchDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-sun fs-2" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="light"></span><span class="fas fa-moon fs-2" data-fa-transform="shrink-3" data-theme-dropdown-toggle-icon="dark"></span><span class="fas fa-adjust fs-2" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="auto"></span></a>
                <div class="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-3" aria-labelledby="themeSwitchDropdown">
                <div class="bg-white dark__bg-1000 rounded-2 py-2">
                    <button class="dropdown-item d-flex align-items-center gap-2" type="button" value="light" data-theme-control="theme"><span class="fas fa-sun"></span>Light<span class="fas fa-check dropdown-check-icon ms-auto text-600"></span></button>
                    <button class="dropdown-item d-flex align-items-center gap-2" type="button" value="dark" data-theme-control="theme"><span class="fas fa-moon" data-fa-transform=""></span>Dark<span class="fas fa-check dropdown-check-icon ms-auto text-600"></span></button>
                    <button class="dropdown-item d-flex align-items-center gap-2" type="button" value="auto" data-theme-control="theme"><span class="fas fa-adjust" data-fa-transform=""></span>Auto<span class="fas fa-check dropdown-check-icon ms-auto text-600"></span></button>
                </div>
                </div>
            </div>
            </li>
            <li class="nav-item d-none d-sm-block">
            <a class="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="../../app/e-commerce/shopping-cart.html"><span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span><span class="notification-indicator-number">1</span></a>

            </li>
            <li class="nav-item dropdown">
            <a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span></a>
            <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
                <div class="card card-notification shadow-none">
                <div class="card-header">
                    <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <h6 class="card-header-title mb-0">Notifications</h6>
                    </div>
                    <div class="col-auto ps-0 ps-sm-3"><a class="card-link fw-normal" href="#">Mark all as read</a></div>
                    </div>
                </div>
                <div class="scrollbar-overlay" style="max-height:19rem">
                    <div class="list-group list-group-flush fw-normal fs--1">
                    <div class="list-group-title border-bottom">NEW</div>
                    <div class="list-group-item">
                        <a class="notification notification-flush notification-unread" href="#!">
                        <div class="notification-avatar">
                            <div class="avatar avatar-2xl me-3">
                            <img class="rounded-circle" src="../../assets/img/team/1-thumb.png" alt="" />

                            </div>
                        </div>
                        <div class="notification-body">
                            <p class="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world 😍"</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>

                        </div>
                        </a>

                    </div>
                    <div class="list-group-item">
                        <a class="notification notification-flush notification-unread" href="#!">
                        <div class="notification-avatar">
                            <div class="avatar avatar-2xl me-3">
                            <div class="avatar-name rounded-circle"><span>AB</span></div>
                            </div>
                        </div>
                        <div class="notification-body">
                            <p class="mb-1"><strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status</p>
                            <span class="notification-time"><span class="me-2 fab fa-gratipay text-danger"></span>9hr</span>

                        </div>
                        </a>

                    </div>
                    <div class="list-group-title border-bottom">EARLIER</div>
                    <div class="list-group-item">
                        <a class="notification notification-flush" href="#!">
                        <div class="notification-avatar">
                            <div class="avatar avatar-2xl me-3">
                            <img class="rounded-circle" src="../../assets/img/icons/weather-sm.jpg" alt="" />

                            </div>
                        </div>
                        <div class="notification-body">
                            <p class="mb-1">The forecast today shows a low of 20&#8451; in California. See today's weather.</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>

                        </div>
                        </a>

                    </div>
                    <div class="list-group-item">
                        <a class="border-bottom-0 notification-unread  notification notification-flush" href="#!">
                        <div class="notification-avatar">
                            <div class="avatar avatar-xl me-3">
                            <img class="rounded-circle" src="../../assets/img/logos/oxford.png" alt="" />

                            </div>
                        </div>
                        <div class="notification-body">
                            <p class="mb-1"><strong>University of Oxford</strong> created an event : "Causal Inference Hilary 2019"</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>

                        </div>
                        </a>

                    </div>
                    <div class="list-group-item">
                        <a class="border-bottom-0 notification notification-flush" href="#!">
                        <div class="notification-avatar">
                            <div class="avatar avatar-xl me-3">
                            <img class="rounded-circle" src="../../assets/img/team/10.jpg" alt="" />

                            </div>
                        </div>
                        <div class="notification-body">
                            <p class="mb-1"><strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund</p>
                            <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">🙋‍</span>2d</span>

                        </div>
                        </a>

                    </div>
                    </div>
                </div>
                <div class="card-footer text-center border-top"><a class="card-link d-block" href="../../app/social/notifications.html">View all</a></div>
                </div>
            </div>

            </li>
            <li class="nav-item dropdown px-1">
            <a class="nav-link fa-icon-wait nine-dots p-1" id="navbarDropdownMenu" role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 16" fill="none">
                <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
                </svg></a>
            <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg" aria-labelledby="navbarDropdownMenu">
                <div class="card shadow-none">
                <div class="scrollbar-overlay nine-dots-dropdown">
                    <div class="card-body px-3">
                    <div class="row text-center gx-0 gy-0">
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="../../pages/user/profile.html" target="_blank">
                            <div class="avatar avatar-2xl"> <img class="rounded-circle" src="../../assets/img/team/3.jpg" alt="" /></div>
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2">Account</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://themewagon.com/" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/themewagon.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Themewagon</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://mailbluster.com/" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/mailbluster.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Mailbluster</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/google.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Google</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/spotify.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Spotify</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/steam.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Steam</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/github-light.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Github</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/discord.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Discord</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/xbox.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">xbox</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/trello.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Kanban</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/hp.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Hp</p>
                        </a></div>
                        <div class="col-12">
                        <hr class="my-3 mx-n3 bg-200" />
                        </div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/linkedin.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Linkedin</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/twitter.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Twitter</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/facebook.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Facebook</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/instagram.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Instagram</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/pinterest.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Pinterest</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/slack.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Slack</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img class="rounded" src="../../assets/img/nav-icons/deviantart.png" alt="" width="40" height="40" />
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Deviantart</p>
                        </a></div>
                        <div class="col-4"><a class="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="../../app/events/event-detail.html" target="_blank">
                            <div class="avatar avatar-2xl">
                            <div class="avatar-name rounded-circle bg-primary-subtle text-primary"><span class="fs-2">E</span></div>
                            </div>
                            <p class="mb-0 fw-medium text-800 text-truncate fs--2">Events</p>
                        </a></div>
                        <div class="col-12"><a class="btn btn-outline-primary btn-sm mt-4" href="#!">Show more</a></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </li>
            <li class="nav-item dropdown"><a class="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="avatar avatar-xl">
                <img class="rounded-circle" src="../../assets/img/team/3-thumb.png" alt="" />

                </div>
            </a>
            <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                <div class="bg-white dark__bg-1000 rounded-2 py-2">
                <a class="dropdown-item fw-bold text-warning" href="#!"><span class="fas fa-crown me-1"></span><span>Go Pro</span></a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#!">Set status</a>
                <a class="dropdown-item" href="../../pages/user/profile.html">Profile &amp; account</a>
                <a class="dropdown-item" href="#!">Feedback</a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="../../pages/user/settings.html">Settings</a>
                <a class="dropdown-item" href="../../pages/authentication/card/logout.html">Logout</a>
                </div>
            </div>
            </li>
        </ul>
        </nav>
        <div class="card mb-3">
        <div class="bg-holder d-none d-lg-block bg-card" style="background-image:url(../../assets/img/icons/spot-illustrations/corner-4.png);">
        </div>
        <!--/.bg-holder-->

        <div class="card-body position-relative">
            <div class="row">
            <div class="col-lg-8">
                <h3>Bulk Select</h3>
                <p class="mb-0">Bulk select allows users to check multiple checkboxes at once and toggles a UI for bulk actions to be performed for the selected items.</p>
            </div>
            </div>
        </div>
        </div>
        <div class="card mb-3">
        <div class="card-body">
            <h5 class="mb-0" data-anchor="data-anchor">Bulk select consist of this following parts</h5>
            <ul class="mt-2 mb-0">
            <li>The main checkbox, which is used for checking all the other checkboxes, the attribute <code>data-bulk-select</code> is used to define that item.</li>
            <li>Three(3) elements can be hooked with bulk select: <code>body</code>, <code>actions</code>, <code>replacedElement</code>.
                <pre class="scrollbar mt-2"><code class="language-html">&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; data-bulk-select='{&quot;body&quot;:&quot;bulk-select-body&quot;,&quot;actions&quot;:&quot;bulk-select-actions&quot;,&quot;replacedElement&quot;:&quot;bulk-select-replace-element&quot;}' /&gt;</code></pre>
                <p class="mb-0">These ids definded in these keys are used to hook the respective elements.</p>
            </li>
            <li><code>body:</code> The target checkboxes are wrapped using a unique id defined in <code>body</code>. In this example <code>bulk-select-body</code>. Every targeted checkbox within this wrapper is marked with the attribute <code>data-bulk-select-row.</code></li>
            <li><code>actions:</code> The target actions are wrapped using a unique id defined in <code>actions</code>. The element with this id (in <code>example bulk-select-actions</code>) will be toggled by checking the main checkbox.</li>
            <li><code>replacedElement:</code> The target replaced element with action are wrapped using a unique id defined in <code>replacedElement</code>. Bulk select actions will be replaced with the content of this element with this id (in example <code>bulk-select-replace-element</code>)</li>
            </ul>
        </div>
        </div>
        <div class="card">
        <div class="card-header">
            <div class="row flex-between-end">
            <div class="col-auto align-self-center">
                <h5 class="mb-0">Example</h5>
            </div>
            <div class="col-auto ms-auto">
                <div class="nav nav-pills nav-pills-falcon flex-grow-1" role="tablist">
                <button class="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-48e47ead-d485-4455-92d6-0e7dd6415b74" type="button" role="tab" aria-controls="dom-48e47ead-d485-4455-92d6-0e7dd6415b74" aria-selected="true" id="tab-dom-48e47ead-d485-4455-92d6-0e7dd6415b74">Preview</button>
                <button class="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-e2504a3e-31ef-4dd3-8c8f-8b7a64d2686a" type="button" role="tab" aria-controls="dom-e2504a3e-31ef-4dd3-8c8f-8b7a64d2686a" aria-selected="false" id="tab-dom-e2504a3e-31ef-4dd3-8c8f-8b7a64d2686a">Code</button>
                </div>
            </div>
            </div>
        </div>
        <div class="card-body py-0 border-top">
            <div class="tab-content">
            <div class="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-48e47ead-d485-4455-92d6-0e7dd6415b74" id="dom-48e47ead-d485-4455-92d6-0e7dd6415b74">
                <div class="card shadow-none">
                <div class="card-body p-0 pb-3">
                    <div class="d-flex align-items-center justify-content-end my-3">
                    <div id="bulk-select-replace-element">
                        <button class="btn btn-falcon-success btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="ms-1">New</span></button>
                    </div>
                    <div class="d-none ms-3" id="bulk-select-actions">
                        <div class="d-flex">
                        <select class="form-select form-select-sm" aria-label="Bulk actions">
                            <option selected="selected">Bulk actions</option>
                            <option value="Delete">Delete</option>
                            <option value="Archive">Archive</option>
                        </select>
                        <button class="btn btn-falcon-danger btn-sm ms-2" type="button">Apply</button>
                        </div>
                    </div>
                    </div>
                    <div class="table-responsive scrollbar">
                    <table class="table mb-0">
                        <thead class="bg-200">
                        <tr>
                            <th class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" data-bulk-select='{"body":"bulk-select-body","actions":"bulk-select-actions","replacedElement":"bulk-select-replace-element"}' />
                            </div>
                            </th>
                            <th class="text-black dark__text-white align-middle">Name</th>
                            <th class="text-black dark__text-white align-middle">Nationality </th>
                            <th class="text-black dark__text-white align-middle">Gender</th>
                            <th class="text-black dark__text-white align-middle white-space-nowrap pe-3">Age</th>
                        </tr>
                        </thead>
                        <tbody id="bulk-select-body">
                        <tr>
                            <td class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="checkbox-1" data-bulk-select-row="data-bulk-select-row" />
                            </div>
                            </td>
                            <th class="align-middle">Kit Harington</th>
                            <td class="align-middle">British</td>
                            <td class="align-middle">Male</td>
                            <td class="align-middle white-space-nowrap text-end pe-3">32</td>
                        </tr>
                        <tr>
                            <td class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="checkbox-2" data-bulk-select-row="data-bulk-select-row" />
                            </div>
                            </td>
                            <th class="align-middle">Emilia Clarke</th>
                            <td class="align-middle">British</td>
                            <td class="align-middle">Female</td>
                            <td class="align-middle white-space-nowrap text-end pe-3">32</td>
                        </tr>
                        <tr>
                            <td class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="checkbox-3" data-bulk-select-row="data-bulk-select-row" />
                            </div>
                            </td>
                            <th class="align-middle">Peter Dinklage</th>
                            <td class="align-middle">American</td>
                            <td class="align-middle">Male</td>
                            <td class="align-middle white-space-nowrap text-end pe-3">49</td>
                        </tr>
                        <tr>
                            <td class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="checkbox-4" data-bulk-select-row="data-bulk-select-row" />
                            </div>
                            </td>
                            <th class="align-middle">Sean Bean</th>
                            <td class="align-middle">British</td>
                            <td class="align-middle">Male</td>
                            <td class="align-middle white-space-nowrap text-end pe-3">59</td>
                        </tr>
                        <tr>
                            <td class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="checkbox-5" data-bulk-select-row="data-bulk-select-row" />
                            </div>
                            </td>
                            <th class="align-middle">Maisie Williams</th>
                            <td class="align-middle">British</td>
                            <td class="align-middle">Female</td>
                            <td class="align-middle white-space-nowrap text-end pe-3">21</td>
                        </tr>
                        <tr>
                            <td class="align-middle white-space-nowrap">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="checkbox" id="checkbox-6" data-bulk-select-row="data-bulk-select-row" />
                            </div>
                            </td>
                            <th class="align-middle">Sophie Turner</th>
                            <td class="align-middle">British</td>
                            <td class="align-middle">Female</td>
                            <td class="align-middle white-space-nowrap text-end pe-3">23</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            <div class="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-e2504a3e-31ef-4dd3-8c8f-8b7a64d2686a" id="dom-e2504a3e-31ef-4dd3-8c8f-8b7a64d2686a">
                <pre class="scrollbar rounded-1" style="max-height:420px"><code class="language-html">&lt;div class=&quot;card shadow-none&quot;&gt;
&lt;div class=&quot;card-body p-0 pb-3&quot;&gt;
&lt;div class=&quot;d-flex align-items-center justify-content-end my-3&quot;&gt;
    &lt;div id=&quot;bulk-select-replace-element&quot;&gt;
    &lt;button class=&quot;btn btn-falcon-success btn-sm&quot; type=&quot;button&quot;&gt;&lt;span class=&quot;fas fa-plus&quot; data-fa-transform=&quot;shrink-3 down-2&quot;&gt;&lt;/span&gt;&lt;span class=&quot;ms-1&quot;&gt;New&lt;/span&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;d-none ms-3&quot; id=&quot;bulk-select-actions&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;select class=&quot;form-select form-select-sm&quot; aria-label=&quot;Bulk actions&quot;&gt;
        &lt;option selected=&quot;selected&quot;&gt;Bulk actions&lt;/option&gt;
        &lt;option value=&quot;Delete&quot;&gt;Delete&lt;/option&gt;
        &lt;option value=&quot;Archive&quot;&gt;Archive&lt;/option&gt;
        &lt;/select&gt;
        &lt;button class=&quot;btn btn-falcon-danger btn-sm ms-2&quot; type=&quot;button&quot;&gt;Apply&lt;/button&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;table-responsive scrollbar&quot;&gt;
    &lt;table class=&quot;table mb-0&quot;&gt;
    &lt;thead class=&quot;bg-200&quot;&gt;
        &lt;tr&gt;
        &lt;th class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; data-bulk-select='{&quot;body&quot;:&quot;bulk-select-body&quot;,&quot;actions&quot;:&quot;bulk-select-actions&quot;,&quot;replacedElement&quot;:&quot;bulk-select-replace-element&quot;}' /&gt;
            &lt;/div&gt;
        &lt;/th&gt;
        &lt;th class=&quot;text-black dark__text-white align-middle&quot;&gt;Name&lt;/th&gt;
        &lt;th class=&quot;text-black dark__text-white align-middle&quot;&gt;Nationality &lt;/th&gt;
        &lt;th class=&quot;text-black dark__text-white align-middle&quot;&gt;Gender&lt;/th&gt;
        &lt;th class=&quot;text-black dark__text-white align-middle white-space-nowrap pe-3&quot;&gt;Age&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody id=&quot;bulk-select-body&quot;&gt;
        &lt;tr&gt;
        &lt;td class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;checkbox-1&quot; data-bulk-select-row=&quot;data-bulk-select-row&quot; /&gt;
            &lt;/div&gt;
        &lt;/td&gt;
        &lt;th class=&quot;align-middle&quot;&gt;Kit Harington&lt;/th&gt;
        &lt;td class=&quot;align-middle&quot;&gt;British&lt;/td&gt;
        &lt;td class=&quot;align-middle&quot;&gt;Male&lt;/td&gt;
        &lt;td class=&quot;align-middle white-space-nowrap text-end pe-3&quot;&gt;32&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        &lt;td class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;checkbox-2&quot; data-bulk-select-row=&quot;data-bulk-select-row&quot; /&gt;
            &lt;/div&gt;
        &lt;/td&gt;
        &lt;th class=&quot;align-middle&quot;&gt;Emilia Clarke&lt;/th&gt;
        &lt;td class=&quot;align-middle&quot;&gt;British&lt;/td&gt;
        &lt;td class=&quot;align-middle&quot;&gt;Female&lt;/td&gt;
        &lt;td class=&quot;align-middle white-space-nowrap text-end pe-3&quot;&gt;32&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        &lt;td class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;checkbox-3&quot; data-bulk-select-row=&quot;data-bulk-select-row&quot; /&gt;
            &lt;/div&gt;
        &lt;/td&gt;
        &lt;th class=&quot;align-middle&quot;&gt;Peter Dinklage&lt;/th&gt;
        &lt;td class=&quot;align-middle&quot;&gt;American&lt;/td&gt;
        &lt;td class=&quot;align-middle&quot;&gt;Male&lt;/td&gt;
        &lt;td class=&quot;align-middle white-space-nowrap text-end pe-3&quot;&gt;49&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        &lt;td class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;checkbox-4&quot; data-bulk-select-row=&quot;data-bulk-select-row&quot; /&gt;
            &lt;/div&gt;
        &lt;/td&gt;
        &lt;th class=&quot;align-middle&quot;&gt;Sean Bean&lt;/th&gt;
        &lt;td class=&quot;align-middle&quot;&gt;British&lt;/td&gt;
        &lt;td class=&quot;align-middle&quot;&gt;Male&lt;/td&gt;
        &lt;td class=&quot;align-middle white-space-nowrap text-end pe-3&quot;&gt;59&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        &lt;td class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;checkbox-5&quot; data-bulk-select-row=&quot;data-bulk-select-row&quot; /&gt;
            &lt;/div&gt;
        &lt;/td&gt;
        &lt;th class=&quot;align-middle&quot;&gt;Maisie Williams&lt;/th&gt;
        &lt;td class=&quot;align-middle&quot;&gt;British&lt;/td&gt;
        &lt;td class=&quot;align-middle&quot;&gt;Female&lt;/td&gt;
        &lt;td class=&quot;align-middle white-space-nowrap text-end pe-3&quot;&gt;21&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
        &lt;td class=&quot;align-middle white-space-nowrap&quot;&gt;
            &lt;div class=&quot;form-check mb-0&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;checkbox-6&quot; data-bulk-select-row=&quot;data-bulk-select-row&quot; /&gt;
            &lt;/div&gt;
        &lt;/td&gt;
        &lt;th class=&quot;align-middle&quot;&gt;Sophie Turner&lt;/th&gt;
        &lt;td class=&quot;align-middle&quot;&gt;British&lt;/td&gt;
        &lt;td class=&quot;align-middle&quot;&gt;Female&lt;/td&gt;
        &lt;td class=&quot;align-middle white-space-nowrap text-end pe-3&quot;&gt;23&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
            </div>
        </div>
        </div>
        <footer class="footer">
        <div class="row g-0 justify-content-between fs--1 mt-4 mb-3">
            <div class="col-12 col-sm-auto text-center">
            <p class="mb-0 text-600">Thank you for creating with Falcon <span class="d-none d-sm-inline-block">| </span><br class="d-sm-none" /> 2023 &copy; <a href="https://themewagon.com">Themewagon</a></p>
            </div>
            <div class="col-12 col-sm-auto text-center">
            <p class="mb-0 text-600">v3.18.0</p>
            </div>
        </div>
        </footer>
    </div>
</template>
