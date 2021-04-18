<template>
    <!-- Footer -->
    <footer class="text-center mt-5">
        <div class="card">
            <p class="card-header">© {{ new Date().getFullYear() }} Copyright:</p>
            <div class="card-body">
                <h5 class="card-title">{{$t('footer_2work_quote')}}</h5>
                <h6>{{$t('footer_2work_invite')}}</h6>
                <router-link to="/register" class="btn btn-primary" id="link">
                    {{$t('register_title')}}
                </router-link>
               
            </div>
        </div>
    </footer>
</template>
<style scoped>

    #link {
        background-color:#D46C4E;
        color:white;
        border-radius: 29px;
        border-color:peru
    }
    .card-header{
        background-color:black;
        color: white;
    }

  

    h5 {
        font-family: serif;
        font-size: large;
        
    }
    .card-body{
        background-color: #43978D;
    }
   
   
</style>>
