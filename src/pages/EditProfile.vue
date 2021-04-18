<template>
	<el-container>
		<div class="block-profile pt-5 pb-5">
			<div class="container">
				<div class="row">
					<el-navbar />
					<div class="col-md-9 col-xs-12 body-cart body-cart-profil">
						<div class="card">
							<div class="card-body">
								<h1 class="text-center mt-5">{{ $t("edit_profile_title") }}</h1>
								<form class="w-100" @submit.prevent="updateProfile">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputName">{{ $t("edit_profile_firstName") }}</label>
											<input
												type="text"
												class="form-control"
												v-model.trim="$v.user.firstName.$model"
												:class="{ 'is-invalid': $v.user.firstName.$error }"
											/>
											<div class="invalid-feedback">
												<span v-if="!$v.user.firstName.required">
												{{ $t("register_required") }}</span
												>
											</div>
										</div>

									<div class="form-group col-md-6">
										<label for="inputName">{{ $t("edit_profile_lastName") }}</label>
										<input
											type="text"
											class="form-control"
											v-model.trim="$v.user.lastName.$model"
											:class="{
											'is-invalid': $v.user.lastName.$error,
											}"
										/>
										<div class="invalid-feedback">
											<span v-if="!$v.user.lastName.required">
											{{ $t("edit_profile_required") }}</span
											>
											</div>
										</div>
									</div>

									<div class="form-group">
										<label for="inputEmail">{{ $t("edit_profile_email") }}</label>
										<input
											type="email"
											class="form-control"
											:placeholder="$t('edit_profile_exemple')"
											v-model.trim="$v.user.email.$model"
											:class="{'is-invalid': $v.user.email.$error, }"
										/>
										<div class="invalid-feedback">
											<span v-if="!$v.user.email.required">
											{{ $t("edit_profile_required") }}
											</span>
											<span v-if="!$v.user.email.email">
												{{ $t("edit_profile_error_email") }}
											</span>
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputGender">{{ $t("edit_profile_gender") }}</label>
											<select
												class="form-control"
												v-model="$v.user.gender.$model"
												:class="{ 'is-invalid': $v.user.gender.$error }"
											>
												<option>{{ $t("edit_profile_male") }}</option>
												<option>{{ $t("edit_profile_female") }}</option>
											</select>
											<div class="invalid-feedback">
												<span class="text-danger" v-if="!$v.user.gender.required">
													{{ $t("edit_profile_required") }}
												</span>
											</div>
										</div>
										<div class="form-group col-md-6">
											<label for="birthday">{{ $t("edit_profile_birthday") }}</label>
											<input
												type="date"
												class="form-control"
												v-model="$v.user.birthday.$model"
												required
											/>
										</div>
									</div>

									<div class="d-flex justify-content-center">
										<button
											type="submit"
											class="btn btn-primary pr-5 pl-5"
											:disabled="this.$v.$invalid"
										>
											{{ $t("edit_profile_submit") }}
										</button>
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</el-container>
</template>

<script>
import Container from '../components/container.vue';
import Navbar from '../components/navbar.vue';
import { required, email } from "vuelidate/lib/validators";

export default {
	name: "EditProfile",
	data() {
		return {
			user: {
				firstName: "",
				lastName: "",
				email: "",
				gender: "",
				acceptTerms: false,
				birthday: ""
			}
		}
	},
	validations: {
		user: {
			firstName: {
				required
			},
			lastName: {
				required
			},
			email: {
				required,
				email
			},
			gender: {
				required
			},
			acceptTerms: {
				checked(val) {
					return val
				},
			},
			birthday: {
				required
			}
		}
	},
	methods: {
		updateProfile() {
			this.$v.$touch();
			if (this.$v.$invalid) return;
			console.log(this.user);
			this.$toast.success(this.$t('register_success'))
		}
	},
	components:{
		"el-container" : Container,
		"el-navbar": Navbar
	}
}
</script>

<style scoped>
	.block-profile {
		background: #dddddd7a;
		height: 100vh;
	}
	.body-cart-profil {
		height: 600px;
	}
	.card {
		width: 100%;
		height: 100%
	}
	.user-avatar {
		border-radius: 100% !important;
		height: 100px;
	}
	.card-text {
		text-align: justify;
	}
</style>
