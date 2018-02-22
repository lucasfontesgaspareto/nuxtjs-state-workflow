<template>
  <div>
    <p>Username: {{ user.name }} (state)</p>
    <p>Username Length: {{ length }} (getters)</p>
    <hr>
    <p>Add user by now? <button @click="addUser({ name: 'Lucas' })">Shure!</button> (mutations)</p>
    <p>Add user from future? <button @click="addUserFromFuture({ name: 'Lucas Fontes Gaspareto' })">Yes!</button> (actions)</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
    ...mapGetters({
      length: 'userNameLength'
    })
  },
  methods: {
    ...mapMutations({
      addUser: 'SET_USER'
    }),
    ...mapActions({
      addUserFromFuture: 'GET_USER'
    })
  }
}
</script>
