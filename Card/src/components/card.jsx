import React from 'react'

export default function card(props) {

  console.log(props.name)

  console.log()
  return (
    <div class="card">

      <div class="card-header">
        <div class="status">available</div>
        <div class="rate">${props.rate}/hr</div>
      </div>

      <div class="avatar">
        <img src={props.photo} alt="profile" />
      </div>

      <div class="name">{props.name}</div>
      <div class="role">{props.pos}</div>

      <div class="company">{props.type}</div>

      <div class="tags">
        <div class="tag">{props.skills}</div>
        <div class="tag">UX</div>
        <div class="tag">photoshop</div>
        <div class="tag highlight">+4</div>
      </div>

      <div class="desc">
        {props.des}
      </div>

      <div class="divider"></div>

      <button class="profile-btn">VIEW PROFILE</button>

    </div>
  )
}
