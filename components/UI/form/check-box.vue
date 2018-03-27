<template>
    <div class="check-box-con">
        <label class="check-box-label"> {{label}}
            <input type="checkbox"  @change="v => this.cValue = !this.cValue">
            <span class="checkmark"></span>
        </label>
        {{value}}
        {{cValue}}
    </div>
</template>

<script>
export default {
    props:  {
        label : '',
        value : {
            type: Boolean,
            default () {
                return false
            }
        }
    },
    data () {
        return {
        }
    },
    computed : {
        cValue: {
            get () {
            return this.value
            },
            set (value) {
            this.$emit('input', value)
            }
        }
    }
}
</script>

<style>
.check-box-con{
    margin: 3px;
    position:relative;
    display: block;
    padding-left: 20px;
    font-size: 12px;
    color: white;
    font-weight: 100;
}
/* Hide the browser's default checkbox */
.check-box-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 10px;
    width: 10px;
    background-color: inherit;
    border: 1px solid white;
}

/* On mouse-over, add a grey background color */
.check-box-label:hover input ~ .checkmark {
    background-color: #ccc;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.check-box-label input:checked ~ .checkmark{
    background-color: black;
}
</style>