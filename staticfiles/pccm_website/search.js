function showContent(sectionName) {
  const contentMap = {
    "Case Summary":`
    <form id="case_summary" onsubmit="">
      <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrfToken }}">
     <input type="hidden" name="patient_id" value="{{ patient.patient_id }}">
    <div class="diagnosis-form">
        <label for="diagnosis">Diagnosis:</label>
        <input placeholder="Enter details here...." type="text" id="diagnosis" name="diagnosis">

        <label for="complaint">Chief Complaint/ Symptoms:</label>
        <input placeholder="Enter any Chief Complaint/ Symptoms here...." type="text" id="complaint" name="complaint">

        <label for="clinical-staging">Clinical Staging on Clinical Breast Examination:</label>
        <input placeholder="Enter details here...." type="text" id="clinical-staging" name="clinical-staging">

        <label for="diagnostic-workup">Past Diagnostic Workup (if any):</label>
        <textarea placeholder="Enter details here...." id="diagnostic-workup" name="diagnostic-workup"></textarea>

        <label for="radiology-workup">Radiology Workup:</label>
        <textarea placeholder="Enter any Radiology Workup here...." id="radiology-workup" name="radiology-workup"></textarea>
    </div>
    <!-- Clinical Staging on Radiology Section -->
    <div class="radiology-form">
        <h2>Clinical Staging on Radiology:</h2>
        <input placeholder="Enter details here...." type="text" id="staging-radiology" name="staging-radiology">

        <div class="section">
            <h3>FNAC</h3>
            <label>Date:</label>
            <input type="date" name="fnac-date">
            <label>Impression:</label>
            <input placeholder="Enter any Impression here...." type="text" name="fnac-impression">
        </div>

        <div class="section">
            <h3>Biopsy</h3>
            <label>Date:</label>
            <input type="date" name="biopsy-date">
            <label>Impression:</label>
            <input placeholder="Enter any Impression here...." type="text" name="biopsy-impression">
        </div>

        <div class="section">
            <h3>Receptor Status</h3>
            <label>ER:</label>
            <input placeholder="Enter here...." type="text" name="er">
            <label>PR:</label>
            <input placeholder="Enter here...." type="text" name="pr">
            <label>HER2:</label>
            <input placeholder="Enter here...." type="text" name="her2">
            <label>HER2-FISH:</label>
            <input placeholder="Enter here...." type="text" name="her2-fish">
            <label>Ki-67:</label>
            <input placeholder="Enter here...." type="text" name="ki67">
        </div>

        <div class="radio-group">
            <label><strong>NAST:</strong></label>
            <input type="radio" id="nast-yes" name="nast" value="Yes">
            <label for="nast-yes">Yes</label>
            <input type="radio" id="nast-no" name="nast" value="No">
            <label for="nast-no">No</label>
        </div>

        <div class="section">
            <label><strong>Type of NAST:</strong></label>
            <select name="type-nast">
                <option value="NACT">1) NACT</option>
                <option value="NAHT">2) NAHT</option>
                <option value="NACT+NAHT">3) NACT+NAHT</option>
            </select>

            <div class="nast-block">
                <h4>NACT</h4>
                <label>NACT Start Date:</label>
                <input type="date" name="nact-start">
                <label>Regimen:</label>
                <input placeholder="Enter here...." type="text" name="nact-regimen">
                <label>NACT End Date:</label>
                <input type="date" name="nact-end">
                <label>Frequency:</label>
                <input placeholder="Enter here...." type="text" name="nact-frequency">
            </div>

            <div class="nast-block">
                <h4>NAHT</h4>
                <label>NAHT Start Date:</label>
                <input type="date" name="naht-start">
                <label>Regimen:</label>
                <input placeholder="Enter here...." type="text" name="naht-regimen">
                <label>NAHT End Date:</label>
                <input type="date" name="naht-end">
                <label>Frequency:</label>
                <input placeholder="Enter here...." type="text" name="naht-frequency">
            </div>
        </div>
    </div>
    <!-- Mid–NAST Workup Section -->
<div class="midnast-form">
  <h3>Mid–NAST Workup</h3>
  <textarea placeholder="Enter Mid–NAST Workup details..."></textarea>

  <h3>Post–NAST Workup</h3>
  <textarea placeholder="Enter Post–NAST Workup details..."></textarea>

  <div class="inline-label">
    <label>Clinical Tumor Response:</label>
    <input placeholder="Enter here...." type="text" />
  </div>

  <h3>Genetics:</h3>
  <div class="radio-row">
  <label>Genetic Counselling done:</label>
  <label class="inline-option"><input type="radio" name="counselling" value="Yes"> Yes</label>
  <label class="inline-option"><input type="radio" name="counselling" value="No"> No</label>
</div>

<div class="radio-row">
  <label>Genetic Test done:</label>
  <label class="inline-option"><input type="radio" name="test" value="Yes"> Yes</label>
  <label class="inline-option"><input type="radio" name="test" value="No"> No</label>
</div>


  <div class="split">
    <div>
      <label>Date:</label>
      <input type="date"/>
    </div>
    <div>
      <label>Impression:</label>
      <input placeholder="Enter here...." type="text"/>
    </div>
  </div>

  <label>Comments:</label>
  <textarea placeholder="Enter any additional comments..."></textarea>
</div>

<!-- Inserted Surgery & Histopathology Block -->
<div class="case-summary-surgery-wrapper">
  <h2>Surgery Details:</h2>
  <div class="section">
    <div class="field">
      <label class="note-highlight">Surgery Note:</label>
      <textarea placeholder="Enter here...."></textarea>
    </div>
    <div class="field">
      <label>Date of Surgery:</label>
      <input type="date" >
    </div>
    <div class="field">
      <label>Lesion Location:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Surgery Classification:</label>
      <input type="text" placeholder="Oncoplastic/WBR">
    </div>
    <div class="field">
      <label>Hospital:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Type of Surgery:</label>
      <input type="text" placeholder="BCS / Mastectomy">
    </div>
    <div class="field">
      <label>Nodes Excised:</label>
      <input type="text" placeholder="Enter here....">
    </div>
  </div>

  <h2>Surgery Histopathology:</h2>
  <div class="section">
    <div class="field">
      <label>Tumor Size:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Tumor Histology Type:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Pathological Tumor Response:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Tumor Focality:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Tumor Histology Grade:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Pathological Staging:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Margin Status:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Nodes Status:</label>
      <input type="text" placeholder="Enter here....">
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Nodes</th>
        <th>No. of nodes excised</th>
        <th>No. of nodes positive</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Palpable Nodes</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>Sentinel Nodes</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>Axillary Nodes</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Others"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
      </tr>
    </tbody>
  </table>
  <p class="footnote">*‘Others’ field should be editable. The response entered in ‘Others’ to be displayed then.</p>

  <h2 class="post-op">Post–op Complications:</h2>
  <div class="radio-group">
    <label>Yes</label>
    <input type="radio" name="complication" value="yes">
    <label>No</label>
    <input type="radio" name="complication" value="no">
  </div>

  <div class="section">
    <div class="field">
      <label>Date of complication reported:</label>
      <input type="date">
    </div>
    <div class="field">
      <label>Complication Grade:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Type of complication:</label>
      <input type="text" placeholder="Enter here....">
    </div>
    <div class="field">
      <label>Treatment:</label>
      <input type="text" placeholder="Enter here....">
    </div>
  </div>
</div>

<!-- Immediate Follow-up Section -->
<div class="immediate-followup-wrapper">
  <fieldset>
    <legend>Immediate Follow-up:</legend>
    <div class="row">
      <label>Last Follow-up Visit Date:
        <input type="date" name="last_visit" />
      </label>
      <label>Next Follow-up Date:
        <input type="date" name="next_visit" />
      </label>
    </div>
    <label>Reason of Visit:<br>
      <textarea name="reason" rows="2" placeholder="Enter here...."></textarea>
    </label>
    <label>Advice:<br>
      <textarea name="advice" rows="2" placeholder="Enter here...."></textarea>
    </label>
  </fieldset>

  <fieldset>
    <div class="inline-label">
      <span>Radiation:</span>
      <label><input type="radio" name="radiation" value="yes" /> Yes</label>
      <label><input type="radio" name="radiation" value="no" /> No</label>
    </div>
    <div class="row">
      <label>Radiation Start Date:
        <input type="date" name="rad_start" / >
      </label>
      <label>Radiation Type:
        <input type="text" name="rad_type" / placeholder="Enter here....">
      </label>
    </div>
    <label>Dose Fractionation Protocol:
      <input type="text" name="dose_protocol" / placeholder="Enter here....">
    </label>
    <div class="row">
      <label>Radiation Technique:
        <input type="text" name="rad_technique" / placeholder="Enter here....">
      </label>
      <label>Boost Planning Technique:
        <input type="text" name="boost_technique" / placeholder="Enter here....">
      </label>
    </div>
    <div class="row">
      <label>Radiation Toxicity:
        <input type="text" name="rad_toxicity" / placeholder="Enter here....">
      </label>
      <label>Radiation End Date:
        <input type="date" name="rad_end" />
      </label>
    </div>
  </fieldset>

  <fieldset>
    <div class="inline-label">
      <span>AST:</span>
      <label><input type="radio" name="ast" value="yes" /> Yes</label>
      <label><input type="radio" name="ast" value="no" /> No</label>
    </div>
    <label>Type of AST:
      <select name="ast_type">
        <option value="act">ACT</option>
        <option value="aht">AHT</option>
        <option value="act_aht">ACT + AHT</option>
      </select>
    </label>

    <div class="row">
      <label>ACT Start Date:
        <input type="date" name="act_start" />
      </label>
      <label>Regimen:
        <input type="text" name="act_regimen" / placeholder="Enter here....">
      </label>
    </div>
    <div class="row">
      <label>ACT End Date:
        <input type="date" name="act_end" />
      </label>
      <label>Frequency:
        <input type="text" name="act_frequency" / placeholder="Enter here....">
      </label>
    </div>

    <div class="row">
      <label>AHT Start Date:
        <input type="date" name="aht_start" />
      </label>
      <label>Regimen:
        <input type="text" name="aht_regimen" / placeholder="Enter here....">
      </label>
    </div>
    <div class="row">
      <label>AHT End Date:
        <input type="date" name="aht_end" />
      </label>
      <label>Frequency:
        <input type="text" name="aht_frequency" / placeholder="Enter here....">
      </label>
    </div>
  </fieldset>
</div>


<!-- ANNUAL FOLLOWUP Section -->
<div class="annual-followup">
  <h3>Annual Follow-up:</h3>
  <label>Last Follow-up Visit Date:</label>
  <input type="date"/>

  <label>Clinical Findings:</label>
  <textarea placeholder="Enter Clinical Findings Here...."></textarea>

  <label>Radiology Investigation advised:</label>
  <div class="split">
    <div>
      <label>Date:</label>
      <input type="date"/>
    </div>
    <div>
      <label>Impression:</label>
      <select>
        <option value="">--Select--</option>
        <option value="Normal">Normal</option>
        <option value="Suspicious">Suspicious</option>
        <option value="Abnormal">Abnormal</option>
      </select>
    </div>
  </div>

  <label>Other Investigation advised:</label>
  <div class="split">
    <div>
      <label>Date:</label>
      <input type="date"/>
    </div>
    <div>
      <label>Impression:</label>
      <input placeholder="Enter Impression here...." type="text"/>
    </div>
  </div>

  <div class="split">
    <div>
      <label>Recurrence Status:</label>
      <input placeholder="Enter Status here...." type="text"/>
    </div>
    <div>
      <label>Follow-up Status:</label>
      <input placeholder="Enter Status here...." type="text"/>
    </div>
  </div>

  <div class="split">
    <div>
      <label>Recurrence Type:</label>
      <input placeholder="Enter type here" type="text"/>
    </div>
    <div>
      <label>Next Follow-up Date:</label>
      <input type="date"/>
    </div>
  </div>

  <h3>PROMS:</h3>
  <label>Annual Follow-up Rate:</label>
  <input placeholder="Enter here" type="text"/>
  <label>Comments:</label>
  <textarea placeholder="Enter any additional comments here...."></textarea>

  <h3>Onco–psychology:</h3>
  <div class="radio-inline">
    <label>Onco–psychology counselling done:</label>
    <label><input type="radio" name="psychology" value="Yes"> Yes</label>
    <label><input type="radio" name="psychology" value="No"> No</label>
  </div>
  <label>Comments:</label>
  <textarea placeholder="Enter any additional comments here...."></textarea>

  <h3>Nutrition:</h3>
  <div class="radio-inline">
    <label>Nutrition Counselling done:</label>
    <label><input type="radio" name="nutrition" value="Yes"> Yes</label>
    <label><input type="radio" name="nutrition" value="No"> No</label>
  </div>
  <label>Comments:</label>
  <textarea placeholder="Enter any additional comments here...."></textarea>

  <label>Notes/ Comments:</label>
  <textarea placeholder="Enter any additional notes/comments here...."></textarea>
</div>
<button type="submit">Submit</button>
</form>
    `,
    "Visits": `
            <table class="table">
                <thead>
                    <tr>
                        <th>Visit Date</th>
                        <th>Visit Type</th>
                        <th>Investigation/Intervention Advised</th>
                        <th>Date of Investigation/Intervention Done</th>
                        <th>Notes</th>
                        <th>Next Visit Date</th>
                    </tr>
                </thead>
                <tbody id="visitTableBody">
                
                </tbody>
            </table>

            <!-- Buttons added here -->
            <div style="display: flex; justify-content: space-between; margin: 15px 0;">
                <button onclick="scrollToVisitForm()" style="padding: 10px 15px; background-color: #007d86; color: white; border: none; border-radius: 5px; cursor: pointer;">Add Details</button>
            </div>
            <form id="visitForm" onsubmit="add_details(event)">
     <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrfToken }}">
     <input type="hidden" name="patient_id" value="{{ patient.patient_id }}">
    <div class="form-group">
        <label for="visitDate">Visit Date:</label>
        <input type="date" id="visitDate" name="visitDate" required>
    </div>
    
    <div class="form-group">
        <label for="investigation">Investigation/ Intervention Advised:</label>
       <input type="text" id="investigation" name="investigation" required placeholder="Enter investigation type">
    </div>
    
    <div class="form-group">
        <label for="visitType">Visit Type:</label>
  <input type="text" id="visitType" name="visitType" required placeholder="Enter visit type (e.g., Routine, Follow-up)">
    </div>
    
    <div class="form-group">
        <label for="notes">Notes:</label>
        <textarea id="notes" name="notes" rows="4" required></textarea>
    </div>
    
    <div class="form-group">
        <label for="nextVisit">Next Visit Date:</label>
        <input type="date" id="nextVisit" name="nextVisit" required>
    </div>

    <div class="form-group">
        <button type="submit">Submit</button>
    </div>
</form>

        `,
    "Patient Information History":`
      <div class="PIHform-container" >
    <form  id="pihForm" onsubmit="pih(event)">
      <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrfToken }}">
     <input type="hidden" name="patient_id" value="{{ patient.patient_id }}">
      <!-- Patient Identifiers -->
      <div class="section">
        <div class="flex-row">
          <label>Patient ID: <input type="text" name="patient_id" id="patient_id" readonly></label>
          <label>Jehangir ID: <input type="text" name="jehangir_id" id="jehangir_id" readonly></label>
        </div>
        <div class="flex-row">
          <label>File Number: <input type="text" name="file_number" id="file_number" readonly></label>
          <label>Referred By: <input type="text" name="referred_by" id="referred_by" readonly></label>
        </div>
        <label>Date: <input type="date" name="date" id="date" readonly></label>
      </div>

      <!-- Section 2 -->
      <div class="section">
        <label>Name: <input type="text" name="name" id="name" readonly></label>
        <label>Age: <input type="number" name="age" id="age" readonly></label>
        <div class="flex-row">
<label>Gender:
  <select name="gender" id="gender" readonly>
    <option value="">--Please choose an option--</option>
    <option value="M">Male</option>
    <option value="F">Female</option>
    <option value="T">Third Gender</option>
  </select>
</label>
          <label>Date of Birth: <input type="date" name="dob" id="dob" readonly></label>
          <label>Place of Birth: <input type="text" name="birthplace" id="birthplace" readonly></label>
          <label>Identity Card / Number: <input type="text" name="identity_card" id="identity_card" readonly></label>
          <label>ID Number: <input type="text" name="id_number" id="id_number" readonly></label>
        </div>
        <label>Date of First Visit: <input type="date" name="first_visit" id="date" readonly></label>
        <label>Permanent Address:
          <textarea name="perm_address" class="address-textarea" id="perm_address" readonly></textarea>
        </label>
        <label>Current Address:
          <textarea name="curr_address" class="address-textarea" id="curr_address" readonly></textarea>
        </label>
      </div>

      <!-- Section 3 -->
      <div class="section">
        <div class="flex-row">
          <label>Phone Number: <input type="text" name="phone" id="phone" readonly ></label>
          <label>Alternate Number: <input type="text" name="alternate_number" id="alternate_number" readonly></label>
        </div>
        <label>Occupation: <input type="text" name="occupation" id="occupation" readonly></label>
        <label>Email ID: <input type="email" name="email" id="email" readonly></label>
      </div>

      <!-- Section 4 -->
      <div class="section">
        <div class="flex-row">
          <label>Height: <input type="text" name="height" id="height"></label>
          <label>Weight: <input type="text" name="weight" id="weight"></label>
          <label>BMI: <input type="text" name="bmi" id="bmi"></label>
        </div>
        <div class="flex-row income">
          <label>Annual Household Income:</label>
          <label><input type="radio" id="income" value="0–2.5"> 0–2.5 Lakhs</label>
          <label><input type="radio" id="income" value="2.5–5"> 2.5–5 Lakhs</label>
          <label><input type="radio" id="income" value="5–10"> 5–10 Lakhs</label>
          <label><input type="radio" id="income" value="10"> >10 Lakhs</label>
        </div>
        <label>Nutritional Supplements:
          <input type="radio" name="supplement" value="yes" id="supplement"> Yes
          <input type="radio" name="supplement" value="no" id="supplement"> No
          Type: <input type="text" id="supplementType">
        </label>
        <label>Quantity: <input type="text" id="quantity"></label>
        <label>Duration of Use: <input type="text" id="usage"></label>
      </div>
<div class="section">
  <label>Physical Activity:
    <input type="radio" id="physical_yes" name="physical_activity_y_n" value="yes"> Yes
    <input type="radio" id="physical_no" name="physical_activity_y_n" value="no"> No
  </label>
  <label>Type: <input type="text" id="type_physical_activity" name="type_physical_activity"></label>
  <label>Frequency: <input type="text" id="frequency_physical_activity" name="frequency_physical_activity"></label>

  <label>Diet:</label>
  <div class="checkbox-group">
    <label><input type="checkbox" id="diet_vegetarian" name="diet" value="vegetarian"> Vegetarian</label>
    <label><input type="checkbox" id="diet_non_vegetarian" name="diet" value="non_vegetarian"> Non-Vegetarian</label>
    <label><input type="checkbox" id="diet_ovo_vegetarian" name="diet" value="ovo_vegetarian"> Ovo-Vegetarian</label>
    <label><input type="checkbox" id="diet_other" name="diet" value="other"> Other</label>
  </div>

  <label>Alcohol Consumption:
    <input type="radio" id="alcohol_yes" name="alcohol_y_n" value="yes"> Yes
    <input type="radio" id="alcohol_no" name="alcohol_y_n" value="no"> No
    Since age: <input type="text" id="alcohol_age" name="alcohol_consumption_age_yrs">
  </label>
  <label>Quantity per week: <input type="text" id="alcohol_quantity" name="quantity_alcohol_per_week"></label>
  <label>Duration: <input type="text" id="alcohol_duration" name="duration_alcohol_consumption"></label>
  <label>Additional Comments: <input type="text" id="alcohol_comments" name="comments_alcohol"></label>

  <label>Tobacco Exposure:
    <input type="radio" id="tobacco_yes" name="tobacco_y_n" value="yes"> Yes
    <input type="radio" id="tobacco_no" name="tobacco_y_n" value="no"> No
  </label>
  <label>Mode:</label>
  <label><input type="checkbox" id="tobacco_home" name="tobacco_exposure_modes" value="home"> Home</label>
  <label><input type="checkbox" id="tobacco_work" name="tobacco_exposure_modes" value="work"> Work</label>
  <label><input type="checkbox" id="tobacco_commute" name="tobacco_exposure_modes" value="commute"> Commute</label>
  <label><input type="checkbox" id="tobacco_social" name="tobacco_exposure_modes" value="social"> Social</label>

  <label>Type Consumed:</label>
  <label><input type="checkbox" id="cigarette" name="tobacco_types" value="cigarette"> Cigarette</label>
  <label><input type="checkbox" id="beedi" name="tobacco_types" value="beedi"> Beedi</label>
  <label><input type="checkbox" id="gutkha" name="tobacco_types" value="gutkha"> Gutkha</label>
  <label><input type="checkbox" id="hookah" name="tobacco_types" value="hookah"> Hookah</label>
  <label><input type="checkbox" id="patch" name="tobacco_types" value="patch"> Patch</label>
  <label><input type="checkbox" id="tobacco_other" name="tobacco_types" value="other"> Other</label>

  <label>Consumption since age: <input type="text" id="tobacco_age" name="tobacco_consumption_age_yrs"></label>
  <label>Frequency: <input type="text" id="tobacco_frequency" name="tobacco_frequency"></label>
  <label>Quantity per week: <input type="text" id="tobacco_quantity" name="quantity_tobacco_per_week"></label>
  <label>Duration: <input type="text" id="tobacco_duration" name="duration_tobacco_consumption"></label>
  <label>Additional Comments: <input type="text" id="tobacco_comments" name="comments_tobacco"></label>
  <label>Other Habits: <input type="text" id="other_habits" name="other_deleterious_habits"></label>
</div>
<div class="section">
  <label for="marital_status">Marital Status:
    <select name="marital_status" id="marital_status">
      <option value="">--Select--</option>
      <option>Single</option>
      <option>Married</option>
      <option>Divorced</option>
      <option>Widowed</option>
    </select>
  </label>

  <h3>Reproductive History</h3>

  <label>Reproductive History:
    <input type="radio" name="children" id="children_yes" value="yes"> Yes
    <input type="radio" name="children" id="children_no" value="no"> No
  </label>

  <div class="flex-row">
    <label for="daughters">Daughters: <input type="number" id="daughters"></label>
    <label for="sons">Sons: <input type="number" id="sons"></label>
  </div>

  <div class="flex-row">
    <label for="age_at_menarche">Age at Menarche: <input type="number" id="age_at_menarche"></label>
    <label for="period_type">Period Type: <input type="text" id="period_type"></label>
  </div>

  <label for="last_menstrual_period">Last Menstrual Period:
    <input type="date" id="last_menstrual_period">
  </label>

  <div class="flex-row">
    <label for="menopause_status">Menopausal Status: <input type="text" id="menopause_status"></label>
    <label for="age_at_menopause">Age at Menopause: <input type="number" id="age_at_menopause"></label>
  </div>

  <label for="menopause_complications">Menopause Complications:
    <textarea id="menopause_complications" placeholder="Enter any complications or symptoms related to menopause"></textarea>
  </label>

  <div class="flex-row">
    <label for="conceptions">Conceptions: <input type="number" id="conceptions"></label>
    <label for="pregnancy">Pregnancy: <input type="number" id="pregnancy"></label>
    <label for="abortions">Abortions: <input type="number" id="abortions"></label>
  </div>

  <label for="pregnancy_complications">Complications:
    <textarea id="pregnancy_complications" placeholder="Enter any complications during pregnancies or abortions"></textarea>
  </label>

  <label for="age_first_pregnancy">Age at First Pregnancy:
    <input type="number" id="age_first_pregnancy">
  </label>

  <label>Breastfeeding:
    <input type="radio" name="breastfeeding" id="breastfeeding_yes" value="yes"> Yes
    <input type="radio" name="breastfeeding" id="breastfeeding_no" value="no"> No
  </label>

  <label>Fertility Treatment:
    <input type="radio" name="fertility" id="fertility_yes" value="yes"> Yes
    <input type="radio" name="fertility" id="fertility_no" value="no"> No
  </label>

  <label for="fertility_type">Type of Fertility Treatment:
    <input type="text" id="fertility_type">
  </label>

  <label for="fertility_details">Details:
    <textarea id="fertility_details" placeholder="Provide any additional fertility treatment details"></textarea>
  </label>

  <label for="fertility_cycles">Cycles: <input type="number" id="fertility_cycles"></label>

  <label>Success:
    <input type="radio" name="fertility_success" id="fertility_success_yes" value="yes"> Yes
    <input type="radio" name="fertility_success" id="fertility_success_no" value="no"> No
  </label>

  <label for="birth_control_type">Birth Control Used: <input type="text" id="birth_control_type"></label>
  <label for="birth_control_duration">Duration: <input type="text" id="birth_control_duration"></label>

  <label for="birth_control_details">Details:
    <textarea id="birth_control_details" placeholder="Provide any relevant information on birth control usage"></textarea>
  </label>
</div>
  <!-- Section 7/8 -->
      <div class="section">
        <div class="flex-row">
          <label>Complaints Detected By:
            <input type="checkbox"> Self
            <input type="checkbox"> Physician
            <input type="checkbox"> Screening Camp
            <input type="checkbox"> Other
          </label>
          <label>Date of Detection: <input type="date" name="complaint_detection_date"></label>
        </div>

        <table>
          <tr><th>Symptoms</th><th>Left Breast</th><th>Duration</th><th>Right Breast</th><th>Age at Diagnosis</th></tr>
          <tr><td>Pain</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
          <tr><td>Lumps</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
          <tr><td>Nipple Discharge</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
          <tr><td>Dimpling</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        </table>

        <label>Duration of complaints: <input type="text"></label>
        <label>Metastasis Symptoms:</label>
        <div class="checkbox-group">
        <label><input type="checkbox"> Bone Pain</label>
        <label><input type="checkbox"> Cough</label>
        <label><input type="checkbox"> Jaundice</label>
        <label><input type="checkbox"> Headache</label>
        <label><input type="checkbox"> Weight Loss</label></div>

        <label>Previous Cancer: <input type="text"></label>
        <label>Year of Diagnosis: <input type="text"></label>

<div class="table-scroll">
  <table>
    <tr>
      <th>Type</th><th>Details</th><th>Duration</th><th>EO</th><th>MO</th><th>LO</th><th>SO</th><th>FC</th>
    </tr>
    <tr>
      <td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>
      <td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>
      <td><input type="text"></td><td><input type="text"></td>
    </tr>
  </table>
</div>

<div>
        <label>Notes:</label>
        <textarea placeholder="Additional notes or information"></textarea></div>

        <label>Upload Images / PDF:
          <input type="file" name="attachments" accept="image/*,application/pdf" multiple>
        </label>
      </div>
<button type="submit">Submit</button>
    </form>
  </div>
    `,
    "Clinical Examination":`
    <div class="clinical-container">
      <h2>Breast Assessment</h2>
      <form id="clinical" onsubmit="clinical_exam(event)">
      <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrfToken }}">
     <input type="hidden" name="patient_id" value="{{ patient.patient_id }}">
       <div class="form-row">
  <label>Arm Edema:</label>
  <div class="options-group">
    <label><input type="radio" name="arm_edema" id="arm_edema_right" value="Right" /> Right</label>
    <label><input type="radio" name="arm_edema" id="arm_edema_left" value="Left" /> Left</label>
    <label><input type="radio" name="arm_edema" id="arm_edema_both" value="Both" /> Both</label>
    <label><input type="radio" name="arm_edema" id="arm_edema_absent" value="Absent" /> Absent</label>
  </div>
</div>

<div class="form-row">
  <label>Breast Size:</label>
  <div class="options-group">
    <label><input type="radio" name="breast_size" id="breast_size_xs" value="Extra Small" /> Extra Small</label>
    <label><input type="radio" name="breast_size" id="breast_size_s" value="Small" /> Small</label>
    <label><input type="radio" name="breast_size" id="breast_size_m" value="Medium" /> Medium</label>
    <label><input type="radio" name="breast_size" id="breast_size_l" value="Large" /> Large</label>
  </div>
</div>

<div class="form-row">
  <label>Ptosis:</label>
  <div class="options-group">
    <label><input type="radio" name="ptosis" id="ptosis_1" value="Grade 1(mid)" /> Grade 1(mid)</label>
    <label><input type="radio" name="ptosis" id="ptosis_2" value="Grade 2(moderate)" /> Grade 2(moderate)</label>
    <label><input type="radio" name="ptosis" id="ptosis_3" value="Grade 3(Advanced)" /> Grade 3(Advanced)</label>
    <label><input type="radio" name="ptosis" id="ptosis_pseudo" value="Pseudoptosis" /> Pseudoptosis</label>
    <label><input type="radio" name="ptosis" id="ptosis_pm" value="Parenchymal Maldistribution" /> Parenchymal Maldistribution</label>
  </div>
</div>

<div class="form-row">
  <label>Bra Size:</label>
  <div class="input-group">
    <input type="text" name="bra_size_number" id="bra_size_number" placeholder="e.g. 34" />
    <label class="inline-label">Bra Size (Cup):</label>
    <input type="text" name="bra_size_cup" id="bra_size_cup" placeholder="e.g. B" />
  </div>
</div>

<div class="form-row">
  <label>Lump in the Breast:</label>
  <div class="options-group">
    <label><input type="radio" name="lump" id="lump_def" value="Definitely Palpable" /> Definitely Palpable</label>
    <label><input type="radio" name="lump" id="lump_vague" value="Vaguely Palpable" /> Vaguely Palpable</label>
    <label><input type="radio" name="lump" id="lump_diffuse" value="Diffuse" /> Diffuse</label>
    <label><input type="radio" name="lump" id="lump_no" value="No" /> No</label>
  </div>
</div>

<div class="form-row">
  <label>Mastitis Type:</label>
  <div class="options-group">
    <label><input type="radio" name="mastitis" id="mastitis_diffuse" value="Diffuse" /> Diffuse</label>
    <label><input type="radio" name="mastitis" id="mastitis_sectoral" value="Sectoral" /> Sectoral</label>
  </div>
</div>

<div class="form-row">
  <label>Tenderness:</label>
  <div class="options-group">
    <label><input type="radio" name="tenderness" id="tenderness_right" value="Right" /> Right</label>
    <label><input type="radio" name="tenderness" id="tenderness_left" value="Left" /> Left</label>
    <label><input type="radio" name="tenderness" id="tenderness_both" value="Both" /> Both</label>
    <label><input type="radio" name="tenderness" id="tenderness_absent" value="Absent" /> Absent</label>
  </div>
</div>

<div class="form-row">
  <label>Nipple Retraction:</label>
  <div class="options-group">
    <label><input type="radio" name="nipple_retraction" id="nipple_right" value="Right" /> Right</label>
    <label><input type="radio" name="nipple_retraction" id="nipple_left" value="Left" /> Left</label>
    <label><input type="radio" name="nipple_retraction" id="nipple_both" value="Both" /> Both</label>
    <label><input type="radio" name="nipple_retraction" id="nipple_absent" value="Absent" /> Absent</label>
  </div>
</div>

<div class="form-row">
  <label>Discharge:</label>
  <div class="options-group">
    <label><input type="radio" name="discharge" id="discharge_right" value="Right" /> Right</label>
    <label><input type="radio" name="discharge" id="discharge_left" value="Left" /> Left</label>
    <label><input type="radio" name="discharge" id="discharge_both" value="Both" /> Both</label>
    <label><input type="radio" name="discharge" id="discharge_absent" value="Absent" /> Absent</label>
  </div>
</div>

<div class="form-row">
  <label>Discharge Type:</label>
  <div class="options-group">
    <label><input type="radio" name="discharge_type" id="discharge_serous" value="Serous" /> Serous</label>
    <label><input type="radio" name="discharge_type" id="discharge_milky" value="Milky" /> Milky</label>
    <label><input type="radio" name="discharge_type" id="discharge_brown" value="Brown" /> Brown</label>
    <label><input type="radio" name="discharge_type" id="discharge_bloody" value="Bloody" /> Bloody</label>
  </div>
</div>

<div class="form-row">
  <label>Skin Change:</label>
  <div class="options-group">
    <label><input type="radio" name="skin_change" id="skin_right" value="Right" /> Right</label>
    <label><input type="radio" name="skin_change" id="skin_left" value="Left" /> Left</label>
    <label><input type="radio" name="skin_change" id="skin_both" value="Both" /> Both</label>
    <label><input type="radio" name="skin_change" id="skin_absent" value="Absent" /> Absent</label>
  </div>
</div>

<div class="form-row">
  <label>Skin Change Type:</label>
  <div class="options-group">
    <label><input type="checkbox" name="skin_change_type[]" value="Dimpling" id="skin_dimpling" /> Dimpling</label>
    <label><input type="checkbox" name="skin_change_type[]" value="Ulceration" id="skin_ulceration" /> Ulceration</label>
    <label><input type="checkbox" name="skin_change_type[]" value="Discolouration" id="skin_discoloration" /> Discolouration</label>
    <label><input type="checkbox" name="skin_change_type[]" value="Eczema" id="skin_eczema" /> Eczema</label>
    <label><input type="checkbox" name="skin_change_type[]" value="Edema" id="skin_edema" /> Edema</label>
    <label><input type="checkbox" name="skin_change_type[]" value="Redness" id="skin_redness" /> Redness</label>
    <label><input type="checkbox" name="skin_change_type[]" value="Peau d’Orange" id="skin_pdo" /> Peau d’Orange</label>
  </div>
</div>

<div class="form-row">
  <label>Location Right:</label>
  <div class="options-group">
    <label><input type="checkbox" name="location_right[]" value="UOQ" id="loc_right_uoq" /> UOQ</label>
    <label><input type="checkbox" name="location_right[]" value="UIQ" id="loc_right_uiq" /> UIQ</label>
    <label><input type="checkbox" name="location_right[]" value="LOQ" id="loc_right_loq" /> LOQ</label>
    <label><input type="checkbox" name="location_right[]" value="LIQ" id="loc_right_liq" /> LIQ</label>
  </div>
</div>

<div class="form-row">
  <label>Location Left:</label>
  <div class="options-group">
    <label><input type="checkbox" name="location_left[]" value="UOQ" id="loc_left_uoq" /> UOQ</label>
    <label><input type="checkbox" name="location_left[]" value="UIQ" id="loc_left_uiq" /> UIQ</label>
    <label><input type="checkbox" name="location_left[]" value="LOQ" id="loc_left_loq" /> LOQ</label>
    <label><input type="checkbox" name="location_left[]" value="LIQ" id="loc_left_liq" /> LIQ</label>
  </div>
</div>

<div class="form-row">
  <label>Location of Lesion Category:</label>
  <input type="text" name="lesion_location_category" id="lesion_location_category" placeholder="e.g. Retroareolar" />
</div>

<div class="form-row">
  <label>Location Picture:</label>
  <input type="file" name="location_picture" id="location_picture" multiple />
</div>

<div class="form-row">
  <label>Size:</label>
  <div class="options-group">
    <label><input type="radio" name="size" value="< 2 cm" id="size_small" /> &lt; 2 cm</label>
    <label><input type="radio" name="size" value="2–5 cm" id="size_medium" /> 2–5 cm</label>
    <label><input type="radio" name="size" value="> 5 cm" id="size_large" /> &gt; 5 cm</label>
    <label><input type="radio" name="size" value="Nil" id="size_nil" /> Nil</label>
  </div>
</div>

<div class="form-row">
  <label>Consistency:</label>
  <div class="options-group">
    <label><input type="radio" name="consistency" id="consistency_soft" value="Soft" /> Soft</label>
    <label><input type="radio" name="consistency" id="consistency_firm" value="Firm" /> Firm</label>
    <label><input type="radio" name="consistency" id="consistency_hard" value="Hard" /> Hard</label>
    <label><input type="radio" name="consistency" id="consistency_cystic" value="Cystic" /> Cystic</label>
    <label><input type="radio" name="consistency" id="consistency_mobile" value="Mobile" /> Mobile</label>
  </div>
</div>

<div class="form-row">
  <label>Sternal notch to nipple distance (cms):</label>
  <input type="text" name="sternal_to_nipple" id="sternal_to_nipple" />
</div>

<div class="form-row">
  <label>Tumor distance from nipple:</label>
  <input type="text" name="tumor_distance" id="tumor_distance" />
</div>

<div class="form-row">
  <label>Distance from IM crease:</label>
  <input type="text" name="im_crease_distance" id="im_crease_distance" />
</div>

<div class="form-row">
  <label>Skin Tethering:</label>
  <input type="text" name="skin_tethering" id="skin_tethering" />
</div>

<div class="form-row">
  <label>Local Edema:</label>
  <input type="text" name="local_edema" id="local_edema" />
</div>

<div class="form-row">
  <label>Tumor Breast Ratio:</label>
  <input type="text" name="tumor_breast_ratio" id="tumor_breast_ratio" />
</div>
<div class="form-row">
            <label>Fixity:</label>
            <div class="options-group">
                <label><input type="radio" name="fixity" value="Skin"> Skin</label>
                <label><input type="radio" name="fixity" value="Chest Wall"> Chest Wall</label>
                <label><input type="radio" name="fixity" value="Pec. Muscle"> Pec. Muscle</label>
                <label><input type="radio" name="fixity" value="Not Fixed"> Not Fixed</label>
            </div>
        </div>

         <div class="section-box">
        <h3 class="section-header">Palpable Nodes (Auxillary)</h3>

        <div class="form-row">
          <label> Location:</label>
          <div class="options-group">
            <label
              ><input
                type="radio"
                name="axillary_location"
                id="auxillary_nodes_location_right"
                value="right"
              />
              Right</label
            >
            <label
              ><input
                type="radio"
                name="axillary_location"
                id="auxillary_nodes_location_left"
                value="left"
              />
              Left</label
            >
            <label
              ><input
                type="radio"
                name="axillary_location"
                id="auxillary_nodes_location_both"
                value="both"
              />
              Both</label
            >
            <label
              ><input
                type="radio"
                name="axillary_location"
                id="auxillary_nodes_location_absent"
                value="absent"
              />
              Absent</label
            >
          </div>
        </div>
        <div class="form-row">
          <label>Fixity:</label>
          <div class="options-group">
            <label
              ><input
                type="radio"
                name="axillary_fixity"
                id="auxillary_node_fixity_yes"\
                value="yes"
              />
              Yes</label
            >
            <label
              ><input
                type="radio"
                name="axillary_fixity"
                id="auxillary_node_fixity_no"
                value="no"
              />
              No</label
            >
          </div>
        </div>
        <div class="form-row">
          <label>Size:</label>
          <input type="text" id="auxillary_node_size" />
        </div>
        <div class="form-row">
          <label>Number:</label>
          <input type="text" id="auxillary_node_number" />
        </div>
      </div>

      <div class="section-box">
        <h3 class="section-header">Supraclavicular Node</h3>

        <div class="form-row">
          <label> Location:</label>
          <div class="options-group">
            <label
              ><input
                type="radio"
                name="supraclav_location"
                id="supraclavicular_nodes_location_right"
                value="right"
              />
              Right</label
            >
            <label
              ><input
                type="radio"
                name="supraclav_location"
                id="supraclavicular_nodes_location_left"
                value="left"
              />
              Left</label
            >
            <label
              ><input
                type="radio"
                name="supraclav_location"
                id="supraclavicular_nodes_location_both"
                value="both"
              />
              Both</label
            >
            <label
              ><input
                type="radio"
                name="supraclav_location"
                id="supraclavicular_nodes_location_absent"
                value="absent"
              />
              Absent</label
            >
          </div>
        </div>
        <div class="form-row">
          <label>Fixity:</label>
          <div class="options-group">
            <label
              ><input
                type="radio"
                name="supraclav_fixity"
                id="supraclavicular_nodes_fixity_yes"
                value="yes"
              />
              Yes</label
            >
            <label
              ><input
                type="radio"
                name="supraclav_fixity"
                id="supraclavicular_nodes_fixity_no"
                value="no"
              />
              No</label
            >
          </div>
        </div>
        <div class="form-row">
          <label>Size:</label>
          <input type="text" id="supraclavicular_nodes_size" />
        </div>
        <div class="form-row">
          <label>Number:</label>
          <input type="text" id="supraclavicular_nodes_number" />
        </div>
      </div>
            <div class="form-row">
        <label>Clinical Stage Breast Examination:</label>
        <input type="text" id="breast_examination"/>
      </div>

      <div class="form-row">
        <label>Arm Circumference (cms):</label>
        <div class="input-group">
          <input type="text" id="arm_circumferance" />
          <label class="inline-label">Arm Volume (cc):</label>
          <input type="text" id="arm_volume" />
          <label class="inline-label">Arm to elbow (cms):</label>
          <input type="text" id="arm_elbow" />
        </div>
      </div>
      <div class="form-row">
        <label>Contralateral Breast:</label>
        <div class="options-group">
    <label><input type="radio" name="contralateral" value="normal" /> Normal</label>
    <label><input type="radio" name="contralateral" value="diffuse_mastitis" /> Diffuse Mastitis</label>
    <label><input type="radio" name="contralateral" value="localised_mastitis" /> Localised Mastitis</label>
        </div>
      </div>

      <div class="form-row">
        <label>Consent:</label>
        <div class="options-group">
        <label><input type="radio" name="consent" value="yes" /> Yes</label>
        <label><input type="radio" name="consent" value="no" /> No</label>
        <label><input type="radio" name="consent" value="discussed" /> Discussed</label>
        </div>
      </div>

      <div class="form-row">
        <label>Type:</label>
        <input type="text" />
      </div>

      <div class="form-row">
        <label>Diagnosis and Advice/Notes:</label>
        <textarea rows="4" id="diag_notes"></textarea>
      </div>

      <div class="form-row">
        <label>Status of the Disease:</label>
        <input type="text" id="status_disease"/>
      </div>
      <div class="form-row">
        <label>ECOG:</label>
        <input type="text" id="clinical_ecog"/>
      </div>

      <div class="form-row">
        <label>On examination notes:</label>
        <input type="text" id="clinical_notes"/>
      </div>
      <div class="form-row">
        <label>Provisional Diagnosis:</label>
        <input type="text" id="Provisional_Diagnosis"/>
      </div>

      <div class="form-row">
        <label>Follow-up advised:</label>
        <input type="text" id="clinical_followup"/>
      </div>
      <div class="form-row">
        <label>Comments:</label>
        <input type="text" id="comments"/>
      </div>
        <div class="clinical_button">
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    `,
    "Radiology": " ",
    "Biopsy Histopathology": " ",
    "Biobank": " ",
    "NAST": " ",
    "Genetics": " ",
    "Flight Plan": `
      <div class="flight-plan">
    <div class="section">
<form id="flight_plan" onsubmit="flight_plan(event)" enctype="multipart/form-data">
      <div class="flex-row space-between">
        <button type="button">Add Details</button>
        <label>
          Upload Image/PDF:
          <input type="file" accept=".pdf, image/*">
        </label>
      </div>

      <!-- Shared Decision Making -->
      <div class="medical-history-section">
        <h4>Shared Decision Making</h4>
        <textarea name="shared_decision_making" placeholder="Enter shared decision making details..." id="decision_making"></textarea>
      </div>

      <!-- Notes/Comments -->
      <div class="medical-history-section">
        <h4>Notes / Comments</h4>
        <textarea name="notes_comments" placeholder="Enter any additional notes or comments..." id="notes_comment"></textarea>
      </div>
  </form>
    </div>
  </div>
    `,
    "Surgery": " ",
    "Surgery Histopathology": " ",
    "Follow-up": " ",
    "Complications": " ",
    "Radiation": " ",
    "AST": " ",
    "Nutrition": " ",
    "Onco-psychology": " ",
    "PROMs":`
    <form id="test" onsubmit="combinePainInfo()">
    <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrfToken }}">
    <input type="hidden" name="patient_id" value="{{ patient.patient_id }}">

      <!-- Pain Level Radio -->
      <p>Pain Level:</p>
      <label><input type="radio" name="pain_level" value="Mild" required> Mild</label>
      <label><input type="radio" name="pain_level" value="Moderate"> Moderate</label>
      <label><input type="radio" name="pain_level" value="Severe"> Severe</label>

      <!-- Pain Type Radio -->
      <p>Pain Type:</p>
      <label><input type="radio" name="pain_type" value="Sharp" required> Sharp</label>
      <label><input type="radio" name="pain_type" value="Dull"> Dull</label>

      <!-- Hidden field to store combined result -->
      <input type="hidden" name="pain_info" id="pain_info">

      <button type="submit">Submit</button>
</form>
    `,
  };

if (sectionName === "Visits") {
    patient_visits();
  }
if(sectionName === "Patient Information History"){
  loadPatientInfo();
}

// if(sectionName === "Clinical Examination"){
//   loadclinicalinfo()
// }
  const summaryDiv = document.getElementById("caseSummary");
  summaryDiv.innerHTML = `
      <h3>${sectionName}:</h3>
      <p>${
        contentMap[sectionName] ||
        "Details are not available for this section yet."
      }</p>
    `;
}

const csrfToken = "{{ csrf_token }}";
// Optional: add JS functions for button actions
function scrollToVisitForm() {
  const form = document.getElementById("visitForm");
  if (form) form.scrollIntoView({ behavior: "smooth" });
}

function uploadImages() {
  alert("Upload Images functionality not implemented yet.");
}

function patient_visits() {
  const patient_id = document.getElementById("p_id").innerText;
  fetch(`/visit_details/${patient_id}`)
    .then((response) => response.json())
    .then((details) => {
      const tableBody = document.getElementById("visitTableBody");
      tableBody.innerHTML = ""; 

      details.forEach((visit) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${visit.visit_date}</td>
                <td>${visit.visit_type}</td>
                <td>${visit.TypeofInvestigation}</td>
                <td>${visit.DateofInvestigation}</td>
                <td>${visit.Notes}</td>
                <td>${visit.NextVisitDate}</td>
            `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching visit details:", error);
    });
}

function add_details(event){
  const patient_id = document.getElementById("p_id").innerText;
  event.preventDefault(); 
  fetch(`/add_visit/${patient_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken()
    },
    body: JSON.stringify({
      patientId: patient_id,
      visitDate: document.getElementById('visitDate').value,
      investigation: document.getElementById('investigation').value,
      visitType: document.getElementById('visitType').value,
      notes: document.getElementById('notes').value,
      nextVisitDate: document.getElementById('nextVisit').value
    })
  })
  .then(response => {
    if (response.ok) {
      alert("Visit details added successfully!");
      patient_visits();
      document.getElementById("visitForm").reset();
    } else {
      alert("Failed to add visit details.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function getCSRFToken() {
  const token = document.querySelector('[name=csrfmiddlewaretoken]');
  return token ? token.value : '';
}

document.addEventListener("DOMContentLoaded", function () {
  const patient_id_elem = document.getElementById("p_id");
  if (patient_id_elem) {
    const patient_id = patient_id_elem.innerText;
    console.log("Patient ID:", patient_id);
    // You can now call patient_visits() if needed
  } else {
    console.error("Patient ID element not found.");
  }
});


 let editing = false;

  function toggleEdit() {
    const fields = [
      document.getElementById('diagnosis'),
      document.getElementById('complaint'),
      document.getElementById('clinical_staging'),
      document.getElementById('diagnostic_workup'),
      document.getElementById('radiology_workup')
    ];
    const saveBtn = document.getElementById('save-btn');
    const editBtn = document.getElementById('edit-btn');

    if (!editing) {
      let anyFieldEnabled = false;
      fields.forEach(field => {
        if (!field.value.trim()) {
          field.removeAttribute('disabled');
          anyFieldEnabled = true;
        }
      });

      if (anyFieldEnabled) {
        saveBtn.style.display = 'inline-block';
      }

      editBtn.innerText = "Cancel Edit";
    } else {
      fields.forEach(field => field.setAttribute('disabled', 'disabled'));
      saveBtn.style.display = 'none';
      editBtn.innerText = "Edit Empty Fields";
    }

    editing = !editing;
  }

function loadPatientInfo() {
   const patient_id = document.getElementById("p_id").innerText;
  fetch(`/patient/${patient_id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Patient not found");
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
    document.getElementById("patient_id").value=data.patient_id
    document.getElementById("jehangir_id").value=data.jehangir_id
    document.getElementById("file_number").value=data.file_number
    document.getElementById("referred_by").value=data.referred_by
    document.getElementById("date").value=data.date
    document.getElementById("name").value=data.name
    document.getElementById("age").value=data.age
    document.getElementById("dob").value=data.dob
    document.getElementById("gender").value=data.gender
    document.getElementById("identity_card").value=data.identity_card
    document.getElementById("id_number").value=data.id_number
    document.getElementById("curr_address").value=data.address
    document.getElementById("perm_address").value=data.address
    document.getElementById("phone").value=data.phone
    document.getElementById("alternate_number").value=data.alternate_number
    document.getElementById("occupation").value=data.occupation
    document.getElementById("email").value=data.email
    })
    .catch(error => {
      console.error("Error loading patient data:", error);
    });
}

function pih(event) {
  const patient_id = document.getElementById("p_id").innerText;
  event.preventDefault();
  const income = document.querySelector('input[name="income"]:checked')?.value || "";
  const supplement = document.querySelector('input[name="supplement"]:checked')?.value || "";
  const supplementType = document.getElementById("supplementType").value;
  fetch(`/patient/${patient_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken()
    },
    body: JSON.stringify({
      height: document.getElementById('height').value,
      weight: document.getElementById('weight').value,
      bmi: document.getElementById('bmi').value,
      income: income,
      supplement: supplement,
      supplementType: supplementType,
      quantity: document.getElementById('quantity').value,
      usage: document.getElementById('usage').value,
      physical_activity_y_n: document.querySelector('input[name="physical_activity_y_n"]:checked')?.value,
      type_physical_activity: document.getElementById('type_physical_activity').value,
      frequency_physical_activity: document.getElementById('frequency_physical_activity').value,
      diet: Array.from(document.querySelectorAll('input[name="diet"]:checked')).map(cb => cb.value),
      alcohol_y_n: document.querySelector('input[name="alcohol_y_n"]:checked')?.value,
      alcohol_consumption_age_yrs: document.getElementById('alcohol_age').value,
      quantity_alcohol_per_week: document.getElementById('alcohol_quantity').value,
      duration_alcohol_consumption: document.getElementById('alcohol_duration').value,
      comments_alcohol: document.getElementById('alcohol_comments').value,
      tobacco_y_n: document.querySelector('input[name="tobacco_y_n"]:checked')?.value,
      tobacco_exposure_modes: Array.from(document.querySelectorAll('input[name="tobacco_exposure_modes"]:checked')).map(cb => cb.value),
      tobacco_types: Array.from(document.querySelectorAll('input[name="tobacco_types"]:checked')).map(cb => cb.value),
      tobacco_consumption_age_yrs: document.getElementById('tobacco_age').value,
      tobacco_frequency: document.getElementById('tobacco_frequency').value,
      quantity_tobacco_per_week: document.getElementById('tobacco_quantity').value,
      duration_tobacco_consumption: document.getElementById('tobacco_duration').value,
      comments_tobacco: document.getElementById('tobacco_comments').value,
      other_deleterious_habits: document.getElementById('other_habits').value,
      marital_status: document.getElementById('marital_status').value,
      children: document.querySelector('input[name="children"]:checked')?.value,
      daughters: document.getElementById('daughters').value,
      sons: document.getElementById('sons').value,
      age_at_menarche: document.getElementById('age_at_menarche').value,
      period_type: document.getElementById('period_type').value,
      last_menstrual_period: document.getElementById('last_menstrual_period').value,
      menopause_status: document.getElementById('menopause_status').value,
      age_at_menopause: document.getElementById('age_at_menopause').value,
      menopause_complications: document.getElementById('menopause_complications').value,
      conceptions: document.getElementById('conceptions').value,
      pregnancy: document.getElementById('pregnancy').value,
      abortions: document.getElementById('abortions').value,
      pregnancy_complications: document.getElementById('pregnancy_complications').value,
      age_first_pregnancy: document.getElementById('age_first_pregnancy').value,
      breastfeeding: document.querySelector('input[name="breastfeeding"]:checked')?.value,
      fertility: document.querySelector('input[name="fertility"]:checked')?.value,
      fertility_type: document.getElementById('fertility_type').value,
      fertility_details: document.getElementById('fertility_details').value,
      fertility_cycles: document.getElementById('fertility_cycles').value,
      fertility_success: document.querySelector('input[name="fertility_success"]:checked')?.value,
      birth_control_type: document.getElementById('birth_control_type').value,
      birth_control_duration: document.getElementById('birth_control_duration').value,
      birth_control_details: document.getElementById('birth_control_details').value
      })
  })
  .then(response => {
    if (response.ok) {
      alert("Patient details added successfully!");
      document.getElementById("pihForm").reset();
    } else {
      alert("Failed to add details.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function clinical_exam(event) {
  event.preventDefault();
  const patient_id = document.getElementById("p_id").innerText;
  const arm_edema = document.querySelector('input[name="arm_edema"]:checked')?.value || "";
  const breast_size = document.querySelector('input[name="breast_size"]:checked')?.value || "";
  const ptosis = document.querySelector('input[name="ptosis"]:checked')?.value || "";
  const lump_in_breast = document.querySelector('input[name="lump"]:checked')?.value || "";
  const mastitis_type = document.querySelector('input[name="mastitis"]:checked')?.value || "";
  const tenderness = document.querySelector('input[name="tenderness"]:checked')?.value || "";
  const nipple_retraction = document.querySelector('input[name="nipple_retraction"]:checked')?.value || "";
  const discharge = document.querySelector('input[name="discharge"]:checked')?.value || "";
  const discharge_type = document.querySelector('input[name="discharge_type"]:checked')?.value || "";
  const skin_change = document.querySelector('input[name="skin_change"]:checked')?.value || "";
  const lump_size = document.querySelector('input[name="size"]')?.value || "";
  const lump_consistency = document.querySelector('input[name="consistency"]')?.value || "";
  const axillary_location = document.querySelector('input[name="axillary_location"]:checked')?.value || "";
  const axillary_fixity = document.querySelector('input[name="axillary_fixity"]:checked')?.value || "";
  const supraclavicular_location = document.querySelector('input[name="supraclav_location"]:checked')?.value || "";
  const supraclavicular_fixity = document.querySelector('input[name="supraclav_fixity"]:checked')?.value || "";
  const contralateral_breast = document.querySelector('input[name="contralateral"]:checked')?.value || "";
  const consent = document.querySelector('input[name="consent"]:checked')?.value || "";

  fetch(`/clinical_exam/${patient_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken()
    },
    body: JSON.stringify({
      arm_edema,
      breast_size,
      ptosis,
      bra_size_number: document.getElementById("bra_size_number").value,
      bra_size_cup: document.getElementById("bra_size_cup").value,
      lump_in_breast: lump_in_breast,
      mastitis: mastitis_type,
      tenderness:tenderness,
      nipple_retraction: nipple_retraction,
      discharge,
      discharge_type,
      skin_change,
      skin_change_type: Array.from(document.querySelectorAll('input[name="skin_change_type[]"]:checked')).map(cb => cb.value),
      location_right: Array.from(document.querySelectorAll('input[name="location_right[]"]:checked')).map(cb => cb.value),
      location_left: Array.from(document.querySelectorAll('input[name="location_left[]"]:checked')).map(cb => cb.value),
      location_of_lesion_category: document.getElementById("lesion_location_category").value,
      lump_size: lump_size,
      lump_consistency: lump_consistency,
      sternal_notch_to_nipple_distance_cm: document.getElementById("sternal_to_nipple").value,
      tumor_distance_from_nipple: document.getElementById("tumor_distance").value,
      distance_from_im_crease_lower_quadrant_tumor: document.getElementById("im_crease_distance").value,
      skin_tethering: document.getElementById("skin_tethering").value,
      local_edema: document.getElementById("local_edema").value,
      tumor_breast_ratio: parseFloat(document.getElementById("tumor_breast_ratio").value),
      axillary_location,
      axillary_fixity,
      axillary_size: parseFloat(document.getElementById("auxillary_node_size").value),
      axillary_number: document.getElementById("auxillary_node_number").value,
      supraclavicular_size: parseFloat(document.getElementById("supraclavicular_nodes_size").value),
      supraclavicular_number: document.getElementById("supraclavicular_nodes_number").value,
      supraclavicular_location,
      supraclavicular_fixity,
      arm_circumfernce_cm:document.getElementById("arm_circumferance").value,
      arm_volume_cc:document.getElementById("arm_volume").value,
      arm_to_elbow_cm:document.getElementById("arm_elbow").value,
      contralateral_breast,
      consent,
      diagnosis_and_advice_notes: document.getElementById("diag_notes").value,
      status_of_the_disease: document.getElementById("status_disease").value,
      ecog: document.getElementById("clinical_ecog").value,
      on_examination_notes: document.getElementById("clinical_notes").value,
      provisional_diagnosis: document.getElementById("Provisional_Diagnosis").value,
      follow_up_advised: document.getElementById("clinical_followup").value,
      comments:document.getElementById("comments").value,
    }) 
  })
  .then(response => {
    if (response.ok) {
      alert("Patient details added successfully!");
      document.getElementById("clinical").reset();
    } else {
      alert("Failed to add details.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function loadclinicalinfo(){
  const patient_id = document.getElementById("p_id").innerText;
  fetch(`/clinical_exam/${patient_id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Patient not found");
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      
    })
    .catch(error => {
      console.error("Error loading patient data:", error);
    });
}

 function combinePainInfo(event) {
  event.preventDefault();

  const level = document.querySelector('input[name="pain_level"]:checked');
  const type = document.querySelector('input[name="pain_type"]:checked');
  console.log(level,type)

  if (!level || !type) {
    alert("Please select both pain level and pain type.");
    return false;
  }

  const painData = {
    level: level.value,
    type: type.value
  };

  // Use fetch to submit JSON data
  fetch(`/test/${patientId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCSRFToken()
    },
    body: JSON.stringify({
      patient_id: patientId,
      pain_info: JSON.stringify(painData)  // If backend expects a JSON string
    })
  })
  .then(response => {
    if (response.ok) {
      alert("Patient details added successfully!");
      document.getElementById("clinical").reset(); // Reset form
    } else {
      alert("Failed to add details.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}
