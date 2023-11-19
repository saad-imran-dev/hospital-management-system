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
        openInputModal(state) {
            state.input.open = true
        },
        closeInputModal(state) {
            state.input.open = false
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
        setTime(state, action) {
            state.review.time = action.payload
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
    setTime
} = opdAppointmentSlice.actions

export default opdAppointmentSlice.reducer