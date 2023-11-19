import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    input: {
        open: false,
        cnic: '',
    },
    review: {
        open: false,
        name: '',
        phone: '',
        doctor: '',
        time: '',
    },
}

const opdAppointmentSlice = createSlice({
    name: 'OPD_APPOINTMENT',
    initialState,
    reducers: {
        openInputModal(state, action) {
            state.review.time = action.payload
            state.input.open = true
        },
        closeInputModal(state) {
            state.input.open = false
            state.input.cnic = ''
        },
        setCNIC(state, action) {
            state.input.cnic = action.payload
        },
        openReviewModal(state, action) {
            state.review.name = action.payload.name
            state.review.phone = action.payload.phone
            state.review.doctor = action.payload.doctor
            state.review.cnic = state.input.cnic

            state.input.open = false
            state.input.cnic = ''

            state.review.open = true
        },
        closeReviewModal(state) {
            state.review.open = false
        },
    },
})

export const { 
    openInputModal, 
    closeInputModal, 
    setCNIC, 
    openReviewModal, 
    closeReviewModal, 
    setUserDetail,
} = opdAppointmentSlice.actions

export default opdAppointmentSlice.reducer