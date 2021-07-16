import axios from "axios";

export const SignUpRequisition = (data: any, errorFunc: any, error: any, history: any) => {
    let datas = Object.keys(data)
    let entries = ["email", "password", "first_name", "last_name", "biography"]

    let condition = true

    entries.forEach(elt => {
        if (!datas.includes(elt)) {
            condition = false
        }
    })
    if (condition) {
        axios.post("http://localhost:8000/accounts/", {...data}).then((res: any) => {
            errorFunc({isError: false, message: error.message})
            history.push("/login/")
        }).catch(error => {
            errorFunc({isError: true, message: "Email já existente"})
        })
    } else {
        errorFunc({isError: true, message: "Preencha todos os campos!"})
    }
}

export const SignInRequisition = (data: any, history: any, errorFunc: any) => {
    axios.post("http://localhost:8000/login/", {...data}).then((res: any) => {
        let response = res.data
        let token = response.token
        let first_name = response.first_name
        let last_name = response.last_name
        let id = response.id
        localStorage.setItem("token@SETA", token)
        localStorage.setItem("fn@SETA", first_name)
        localStorage.setItem("ln@SETA", last_name)
        localStorage.setItem("id@SETA", id)
        history.push("/profile/")
    }).catch(error => {
        errorFunc(true)
    })
}

export const SetProfileVisibility = (id: any, token: any, setUser: any, isVisible: boolean) => {
    axios.put(`http://localhost:8000/accounts/${id}/`, { isVisible: !isVisible }, {
        headers: {"Authorization": "Token " + token}
    }).then((res: any) => {
        setUser(res.data)
    })
}

export const ChangeAbout = (id: any, token: any, property: any, setUser: any) => {
    axios.put(`http://localhost:8000/accounts/${id}/`, property, {
        headers: {"Authorization": "Token " + token}
    }).then((res: any) => {
        setUser(res.data)
    })
}
