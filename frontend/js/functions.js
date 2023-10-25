// Function to generate HTML from the feedback object
function generateFeedbackHTML(feedback) {
    return `
        <div class="card  mt-2">
          <div class="card-body">
            <div class="media">
              <img src="/img/user.png" class="mr-3 rounded-circle" alt="Profile Picture" style="width: 40px; height: 40px" />
              <div class="media-body">
                <div class="d-flex align-items-center">
                  <img src="img/star.png" alt="Star" class="star" />
                  ${Array(feedback.Score).fill('<img src="img/star.png" alt="Star" class="star" />').join('')}
                </div>
                <h5 class="mt-2">${feedback.ProfileName}</h5>
                <h6 class="mt-0">${feedback.Summary}</h6>
                <p>${feedback.Text}</p>
                <ul class="list-group">
                  <li class="list-group-item list-group-item-light">Scores</li>
                  <li class="list-group-item"><b>Vander negative:</b> ${feedback.vader_neg}</li>
                  <li class="list-group-item"><b>Vader neutral:</b> ${feedback.vader_neu}</li>
                  <li class="list-group-item"><b>Vader positive:</b> ${feedback.vader_pos}</li>
                  <li class="list-group-item"><b>Vader label:</b> ${feedback.vader_label}</li>
                  <li class="list-group-item"><b>Roberta negative:</b> ${feedback.roberta_neg}</li>
                  <li class="list-group-item"><b>Roberta neutral:</b> ${feedback.roberta_neu}</li>
                  <li class="list-group-item"><b>Roberta positive:</b> ${feedback.roberta_pos}</li>
                  <li class="list-group-item"><b>Roberta label:</b> ${feedback.roberta_label}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `;
  }