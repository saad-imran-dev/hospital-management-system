import { configureStore } from '@reduxjs/toolkit'

import opdAppointment from '../features/opdAppointment.slice'

const store = configureStore({
    reducer: {
        opd_appointment: opdAppointment,
    },
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store