import {Component} from "../component";
import {Form} from "../../form";
import {Validators} from "../validators";


export class CreateComponents extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))
        this.form = new Form(this.$el, {
            title: [Validators.required], fulltext: [Validators.required,Validators.minLength(10)]
        })

    }
}

function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value, ...this.form.values()
        }
        this.form.clear()

        console.log(formData)
    }


}