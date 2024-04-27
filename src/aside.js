const feather = require('feather-icons');
import './style.css'; 
setTimeout(() =>{
  feather.replace();
}, 1000);

const Aside = () => {
    return <aside>
        <label for="exampleDropdownFormEmail1" class="form-label">Correo Electronico</label>
<input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />

<label for="exampleDropdownFormPassword1" class="form-label">Contraseña</label>
<input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />

<input type="checkbox" class="form-check-input" id="dropdownCheck" />
<label class="form-check-label" for="dropdownCheck">
Remember me
</label>
<br></br>
<button type="submit" class="btn btn-primary">Sign in</button>

<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">New around here? Sign up</a>
<a class="dropdown-item" href="#">Forgot password?</a>

<div className="icons-right">
    <i data-feather="bell"></i>
    <i data-feather="navigation"></i>
    <i data-feather="paperclip"></i>
    <i data-feather="trash-2"></i>
    <i data-feather="info"></i>
</div>

    </aside>;
}

export default Aside;