<template>
    <div class="app">
      <div class="container-fluid " >
          <h2 class="text-center mt-5 mb-3" >Our best Profiles</h2>
           <div class="row">
               <div class="col-md-12">
                   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-4" v-for="user in users.slice(0, 3)" :key="user.id">
                                        <div class="card profiles">
                                            <img :src="user.profile" class="card-img-top ml-2" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">{{user.user_name}}</h5>
                                                <p class="card-text"><small class="text-muted">{{user.type_profile}}</small></p>
                                                <p class="card-text">{{user.desc}}</p>
                                                <a href="#" class="btn btn-primary">{{$t('Cards_butto')}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-4" v-for="user in users.slice(3, 7)" :key="user.id">
                                        <div class="card profiles">
                                            <img :src="user.profile" class="card-img-top ml-2" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">{{user.user_name}}</h5>
                                                <p class="card-text"><small class="text-muted">{{user.type_profile}}</small></p>
                                                <p class="card-text">{{user.desc}}</p>
                                                <a href="#" class="btn btn-primary">{{$t('Cards_butto')}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
      </div>
    </div>
</template>

<script>
    import JsonUsers from ".../../../mock/Users.json";
    export default {
        data(){
            return{
                users:JsonUsers
            }
        }
    }
</script>

<style scoped>
    .profiles{
        position: relative;
        background-color: rgb(197, 228, 199);
        height: 340px;
    }

    .profiles img{
        height: 70px;
        width: 70px;
    }
</style>
