<template>

<!-- 항단 바 메시지 모달 -->
<div class="modal fade" id="ModalMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">메시지 전송</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">전송대상 :</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">메시지 :</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="lang" class="form-control" style="float:right; pointer-events: none;">Theme</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <div class="dropdown" >
                                    <!-- <select  class="form-control" name="StatesD" id="lang" style="width: 100%">
                                        <option  selected disabled></option>
                                        <option  value="">1</option>
                                        <option  value="">2</option>
                                    </select> -->
                                    <select name="StatesD" id="lang" data-placeholder="Placeholder... " class="form-select test" style="width: 100%">
                                        <option value="AL">Alabama</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CO">Colorado</option>
                                    </select>
                                </div>
                                <!-- <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"> -->
                            </div>
                        </div>
                    </div>
                    <form class="needs-validation" novalidate="novalidate">
                        <div class="mb-3">
                            <label for="organizerMultiple2">드롭다운</label>
                            <select class="form-select js-choice" id="organizerMultiple2" multiple="multiple" size="1" name="organizerMultiple" required="required" data-options='{"removeItemButton":true,"placeholder":true}'>
                                <option value=""> </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <div class="invalid-feedback">Please select one or multiple</div>
                        </div>
                    </form>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary">전송</button>
            </div>
        </div>
    </div>
</div>

<!-- 항단 바 사용자 정보 모달 -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="justify-content: center;">
                <h1 class="modal-title fs-3" id="exampleModalLabel">사용자 정보</h1>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">사용자 ID</a>
                            </div>
                            <div class="col-auto" style="width: 250px;">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">Password</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">New Password</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                            <!-- 
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                                </span>
                            </div> -->
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">Check Password</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">User Name</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">Phone Number</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">Cell Phone</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">Email</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="inputPassword6" class="form-control" style="float:right; pointer-events: none;">Group</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center" style="justify-content: center;">
                            <div class="col-auto" style="width: 180px">
                                <a for="lang" class="form-control" style="float:right; pointer-events: none;">Theme</a>
                            </div>
                            <div class="col-auto" style="width: 250px">
                                <div class="dropdown" >
                                    <select  class="form-control" name="languages" id="lang" style="width: 100%">
                                        <option class="dropdown-item" value=""></option>
                                        <option class="dropdown-item" value="">1</option>
                                        <option class="dropdown-item" value="">2</option>
                                    </select>
                                </div>
                                <!-- <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"> -->
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary">저장</button>
            </div>
        </div>
    </div>
</div>

</template>

<style>

</style>
