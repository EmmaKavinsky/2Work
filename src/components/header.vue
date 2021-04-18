<template id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">{{$t('logo')}}</router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">{{$t('home')}}</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">{{$t('pub_offre')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">{{$t('pub_demande')}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">{{$t('contact')}}</a>
                    </li>

                </ul>


            </div>

            <div class="d-flex justify-content-center last-part-nav">
                <router-link to="/register" class="btn btn-outline-success me-2 mr-2" id="btn_register">
                    {{$t('register_title')}}
                </router-link>

                <router-link to="/login" class="btn btn-outline-secondary ml-2 mr-2">
                    {{$t('login_title')}}
                </router-link>
                <div class="dropdown ml-2">

                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ $t('header_lan_fr') }}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">{{ $t('header_lan_fr') }}</a>
                        <a class="dropdown-item" href="#">{{ $t('header_lan_en') }}</a>
                        <a class="dropdown-item" href="#">{{ $t('header_lan_ar') }}</a>
                    </div>
                </div>
            </div>

        </div>
    </nav>

</template>

<style scoped>
    @media (max-width: 768px) {
        .last-part-nav {
            width: 100%
        }
    }
</style>
