<template>
  <div class="container">
    <div class="form-block">
    <h1>Регистрация нового клиента</h1>

      <form @submit.prevent="" novalidate>
        <transition name="mode-fade" mode="out-in">
        <section v-show="step === 1" key="1section">
          <div>
            <label for="lname">Фамилия *</label>
            <input  @blur="v$.formData.lname.$touch" v-model="formData.lname" type="text" id="lname" name="lname">
          <p
            v-for="error of v$.formData.lname.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <label for="fname">Имя *</label>
            <input   @blur="v$.formData.fname.$touch" v-model="formData.fname" type="text" id="fname" name="fname">
          <p
            v-for="error of v$.formData.fname.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <label for="patronymic">Отчество</label>
            <input v-model="formData.patronymic" type="text" id="patronymic" name="patronymic">
          </div>
          <div>
            <label for="dateBirth">Дата рождения *</label>
            <input @blur="v$.formData.dateBirth.$touch" v-model="formData.dateBirth" type="date" id="dateBirth" name="dateBirth"/>
          <p
            v-for="error of v$.formData.dateBirth.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <label for="phone">Номер телефона *<br> <span> 11 символов, начиная с 7</span></label>
            <input @blur="v$.formData.phone.$touch" v-model="formData.phone" type="tel" name="tel" pattern="^7[0-9]{10}$">
          <p
            v-for="error of v$.formData.phone.$errors"
            :key="error.$uid"
          >
          {{ error.$message }}
          </p> 
          </div>
          <div>
            <label for="gender">Пол</label>
              <div>
                <input v-model="formData.gender" type="radio" id="male" name="gender" value="male">
                <label for="male">Мужской</label>
                <br>
                <input v-model="formData.gender" type="radio" id="female" name="gender" value="female">
                <label for="female">Женский</label>
              </div>
          </div>
          <div>
            <label for="clientGroup">Группа клиентов *<br> <span>Для нескольких вариантов нажмите Ctrl</span></label>
            <select @blur="v$.formData.clientGroup.$touch" v-model="formData.clientGroup" name="clientGroup" id="clientGroup" multiple size="3">
              <option>VIP</option>
              <option>Проблемные</option>
              <option>ОМС</option>
            </select>
          <p
            v-for="error of v$.formData.clientGroup.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <label for="doctor">Лечащий врач</label>
            <select v-model="formData.doctor" name="doctor" id="doctor">
              <option value="ivanov">Иванов</option>
              <option value="zaharov">Захаров</option>
              <option value="chernysheva">Чернышева</option>
            </select>
          </div>
          <div>
            <input v-model="formData.sms" type="checkbox" id="sms" name="sms">
            <label for="sms">Не отправлять смс</label>
          </div>
          <div>
            <p>Шаг {{step}} из 3</p>
            <button @click="nextStep" :disabled="v$.formData.fname.$invalid||v$.formData.lname.$invalid||v$.formData.dateBirth.$invalid||v$.formData.phone.$invalid||v$.formData.clientGroup.$invalid">Следующий шаг</button>
          </div>
        </section>
        </transition>
        <transition name="mode-fade" mode="out-in">
        <section  v-show="step === 2" key="2section">
          <h2>Адрес</h2>
          <div>
            <label for="postCode">Индекс</label>
            <input v-model="formData.postCode" type="text" id="postCode" name="postCode">
          </div>
          <div>
            <label for="country">Страна</label>
            <input v-model="formData.country" type="text" id="country" name="country">
          </div>
          <div>
            <label for="region">Область</label>
            <input v-model="formData.region" type="text" id="region" name="region">
          </div>
          <div>
            <label for="city">Город *</label>
            <input @blur="v$.formData.city.$touch" v-model="formData.city" type="text" id="city" name="city">
          <p
            v-for="error of v$.formData.city.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <label for="street">Улица</label>
            <input v-model="formData.street" type="text" id="street" name="street">
          </div>
          <div>
            <label for="houseNum">Дом</label>
            <input v-model="formData.houseNum" type="text" id="houseNum" name="houseNum">
          </div>
          <div>
            <p>Шаг {{step}} из 3</p>
            <button @click="prevStep">Предыдущий шаг</button>
            <button @click="nextStep" :disabled="v$.formData.city.$invalid">Следующий шаг</button>
          </div>
        </section>
        </transition>
        <transition name="mode-fade" mode="out-in">
        <section  v-show="step === 3" key="3section">
          <h2>Паспорт</h2>
          <div>
            <label for="docType">Тип документа *</label>
            <select @blur="v$.formData.docType.$touch" v-model="formData.docType" name="docType" id="docType">
              <option value="passport">Паспорт</option>
              <option value="birthSertificate">Свидетельство о рождении</option>
              <option value="driverLicence">Водительское удостоверение</option>
            </select>
          <p
            v-for="error of v$.formData.docType.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <label for="docSeries">Серия</label>
            <input v-model="formData.docSeries" id="docSeries" name="docSeries" type="text">
          </div>
          <div>
            <label for="docNum">Номер</label>
            <input  v-model="formData.docNum" id="docNum" name="docNum" type="text">
          </div>
          <div>
            <label for="docIssued">Кем выдан</label>
            <input v-model="formData.docIssued" id="docIssued" name="docIssued" type="text">
          </div>
          <div>
            <label for="issueDate">Дата выдачи *</label>            
            <input @blur="v$.formData.issueDate.$touch" v-model="formData.issueDate" type="date" id="issueDate" name="issueDate"/>
          <p
            v-for="error of v$.formData.issueDate.$errors"
            :key="error.$uid"
          >
          {{ msgRequired }}
          </p>
          </div>
          <div>
            <p>Шаг {{step}} из 3</p>
            <button @click="prevStep">Предыдущий шаг</button>
            <button @click="regClient" type="submit" :disabled="v$.formData.docType.$invalid||v$.formData.issueDate.$invalid">Зарегистрировать клиента</button>
          </div>
        </section>
        </transition>
        <transition name="mode-fade" mode="out-in">
          <section v-show="step === 4"  key="4section">
            <h2>Клиент {{formData.lname}} {{formData.fname}} успешно зарегистрирован</h2>
          </section>
        </transition>

      </form>
    </div>
  </div>
</template>

<script>
  import useVuelidate from "@vuelidate/core";
  import { required, helpers } from "@vuelidate/validators";

  const phoneMask = helpers.regex(/^7[0-9]{10}$/); 

  export default{
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        step: 1,
        msgRequired: 'Поле обязательно для заполнения',
        formData: {
          lname: '',
          fname: '',
          patronymic: '',
          dateBirth: '',
          phone: '',
          gender: '',
          clientGroup: [],
          doctor: '',
          sms: '',
          postCode: '',
          country: '',
          region: '',
          city: '',
          street: '',
          houseNum: '',
          docType: '',
          docSeries: '',
          docNum: '',
          docIssued: '',
          issueDate: ''
          
        }
      }
    },
    methods: {
      nextStep(){
          this.step++;
      },
      prevStep(){
          this.step--;
      },
      regClient(){
        this.step = 4;
      },
      async regClient () {
        const isFormCorrect = await this.v$.$validate()
        if (!isFormCorrect) return
        this.step = 4; 
      }
    },
    validations () {
      return {
        formData: {
          lname: {
            required
          },
          fname: {
            required
          },
          dateBirth: {
            required
          },
          phone: {
            required:helpers.withMessage('Поле обязательно для заполнения', required), phoneMask:helpers.withMessage('Номер телефона должен начинаться с 7 и быть длиной 11 символов',phoneMask)
          },
          clientGroup: {
            required
          },
          city: {
            required
          },
          docType: {
            required
          },
          issueDate: {
            required
          }
        }
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/style.scss'; 


  .mode-fade-enter-active {
    opacity: 1;
    transition: opacity 0.7s;
  }

  .mode-fade-enter-from, .mode-fade-leave-to {
    opacity: 0;
  }

</style>
