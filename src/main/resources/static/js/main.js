const confirmation = {
    btnSubmit: document.getElementById('confirmation_btnSubmmit'),
    show: function (title, text, form, modal) {
        if (modal) modal.hide()
        this.btnSubmit.setAttribute('form', form.getAttribute('id'))
        const exit = () => {
            if (modal) modal.show()
        }
        alertify.confirm(title, text,() => {
            exit()
            this.btnSubmit.click()
        }, exit)
    },
}

const notification = {
    show: function (message, success) {
        if (success) alertify.success(message)
        else alertify.error(message)
    }
}

const dishCreation = {
    modal: new bootstrap.Modal(document.getElementById('dishCreation_modal'), {backdrop: 'static', keyboard: false}),
    form: document.getElementById('dishCreation_form'),
    btnCreate: document.getElementById('dishCreation_btnCreate'),
    show: function () {
        this.form.reset()
        this.modal.show()
    },
    confirm: function () {
        if (this.form.reportValidity()) confirmation.show('Confirmar registro', '¿Estás seguro de registrar un platillo con los datos ingresados?', this.form, this.modal)
        else notification.show('Hay campos incompletos o con errores')
    },
}

const dishUpdate = {
    modal: new bootstrap.Modal(document.getElementById('dishUpdate_modal'), {backdrop: 'static', keyboard: false}),
    form: document.getElementById('dishUpdate_form'),
    inpName: document.getElementById('dishUpdate_inpName'),
    inpPrice: document.getElementById('dishUpdate_inpPrice'),
    inpDescription: document.getElementById('dishUpdate_inpDescription'),
    inpCategory: document.getElementById('dishUpdate_inpCategory'),
    inpId: document.getElementById('dishUpdate_inpId'),
    btnUpdate: document.getElementById('dishUpdate_btnUpdate'),
    show: function (id) {
        this.form.reset()
        fetch(`${context}/Platillos/find/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.json()).then(({dish}) => {
            this.inpId.value = id
            this.inpName.value = dish.name
            if (dish.description) this.inpDescription.value = dish.description
            this.inpPrice.value = dish.price
            this.modal.show()
        }).catch(res => {
            notification.show(res.data.message)
        })

    },
    confirm: function () {
        if (this.form.reportValidity()) confirmation.show('Confirmar actualización', '¿Estás seguro de actualizar la información del platillo?', this.form, this.modal)
        else notification.show('Hay campos incompletos o con errores')
    },
}

const dishDeletion = {
    form: document.getElementById('dishDeletion_form'),
    inpId: document.getElementById('dishDeletion_inpId'),
    show: function (id) {
        this.inpId.value = id
        confirmation.show('Confirmar desactivación', '¿Estás seguro de desactivar este platillo?', this.form)
    },
}