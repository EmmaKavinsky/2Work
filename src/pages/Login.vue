<template>
    <el-container>
        <div class="Container">

            <!-- Begin::Login-->
            <h1 class="text-center mt-5">{{$t('login_title')}}</h1>
            <div class="d-flex justify-content-center mt-5">
                <form class="w-auto" @submit.prevent="handleSubmit" novalidate>
                    <div class="form-group">
                        <label for="InputEmail">{{$t('login_mail')}}</label>
                        <input
                        type="email"
                        name="email"
                        v-model="user.email"
                        class="form-control form-control-lg"
                        :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                        >
                        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">

                        <span class="text-danger" v-if="!$v.user.email.required">{{$t('login_email_required') }}</span>
                        <span class="text-danger" v-if="!$v.user.email.email">{{$t('login_email_invalid')}}</span>

                        </div>

                    </div>
                    <div class="form-group">
                        <label for="InputPassword">{{$t('login_password')}}</label>
                        <input
                        type="password"
                        class="form-control form-control-lg"
                        name="password"
                        v-model="user.password"
                        :class="{'is-invalid':submitted && $v.user.password.$error}"
                        >

                        <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                            <span class="text-danger" v-if="!$v.user.password.required">
                                {{$t('login_password_required')}}
                            </span>
                            <span class="text-danger" v-if="!$v.user.password.minLength">
                                {{$t('login_password_length')}}
                            </span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary pr-3 pl-3" :disabled="this.$v.$invalid">
                            {{$t('login_button')}}
                        </button>
                    </div>
                    <!-- End::Login-->

                    <!-- Begin::Link for forget password -->
                    <div class="row">
                        <div class="col-6">
                            <p class="forgot-password mt-2 mb-4">
                                {{$t('login_register')}}
                            </p>
                        </div>
                        <div class="col-6">
                            <p class="forgot-password mt-2 mb-4">
                                {{$t('login_forget_password')}}
                            </p>
                        </div>
                    </div>
                    <!-- End::Link for forget password -->
                </form>
            </div>

        </div>
    </el-container>
</template>

<script>
/**
 * This page is for login
 */

import Container from '../components/container.vue';
import { required, minLength , email } from 'vuelidate/lib/validators'

export default {
    name:'Login',
    data (){
        return {
            user :{
                email: "",
                password: ""
            },
            submitted : false
        };

    },
    validations:{
        user:{
            email :{
                required ,
                email
            },
            password: {
                required ,
                minLength: minLength(8)
            }

        }
    },
    methods: {
        // This function use to handl login user
        handleSubmit(){
            this.$v.$touch();
            if(this.$v.$invalid) return;
            console.log(this.user);
            this.$toast.success(this.$t('login_success'))
        }
    },
     components :{
        'el-container' : Container
    }
}
</script>
