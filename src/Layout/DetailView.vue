<template>
  <div class="h-[100vh] container relative">
    <div class="h-[50%] flex flex-col relative justify-between p-[20px]">
      <img :src="detailImg" alt=""
           class="h-full w-full object-cover absolute top-0 right-0 bottom-0 rounded-b-[8px] z-[-1]">
      <div class="ml-auto flex gap-[20px] z-[9]">
        <button
            @click="copyLink()"
            class="p-[12px] rounded-full bg-[rgba(255,255,255,0.3)] w-[44px] h-[44px] flex items-center justify-center
             hover:opacity-[0.8] duration-300 ease copy-btn"
        >
          <img :src="shareBtn" alt="" class="z-[9] opacity-1">
        </button>
        <button
            @click="handleBack"
            class="p-[12px] rounded-full bg-[rgba(255,255,255,0.3)] w-[44px] h-[44px] flex items-center
             justify-center hover:opacity-[0.8] duration-300 ease"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12.8337 1.1665L1.16699 12.8332M1.16699 1.1665L12.8337 12.8332" stroke="white" stroke-width="1.5"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="flex flex-col gap-[8px] items-start text-white">
        <span class="text-[16px] font-[600]">25 Mar 2024</span>
        <h4 class="text-[24px] font-[700] font-beauty">Ngày hội Yoga</h4>
      </div>
    </div>
    <div class="p-[20px] text-[14px] font-[600] text-[#202020]">
      “Ngày hội Yoga Dân trí - Mãi khoẻ đẹp cùng Yoga” có hẹn với Hà Nội vào tháng 8!
      <br><br>
      Sự kiện Ngày hội Yoga Dân trí là ngày hội yoga lớn lần đầu tiên do Báo điện tử Dân trí tổ chức nhằm lan tỏa những
      giá trị tích cực, gắn kết cộng
      đồng và tôn vinh lợi ích của Yoga đối với sức khoẻ người Việt.
      <br><br>
      Sự kiện kỳ vọng 5.000 người tham gia cùng xác lập Kỷ lục Việt Nam với Màn đồng
      <br><br>
      diễn Yoga nhiều người tham gia nhất Việt Nam. Đến với sự kiện người tham gia nhận
      được những vật phẩm độc quyền như huy chương kỷ niệm, gói khám sức khoẻ tại Thu Cúc TCI, giấy chứng nhận tham gia
      sự kiện,... đến từ Ban tổ chức lên đến 5 triệu đồng. Người tham gia sự kiện sẽ có cơ hội giao lưu, gặp gỡ với Hoa
      hậu, Diễn viên, Người nổi tiếng, các Vận động viên Yoga quốc gia, các Chuyên gia sức khoẻ hàng đầu, cộng đồng
      Yoga,...với 5000++ bức ảnh đẹp mang đậm phong cách cá nhân, cặp đôi, đội nhóm...
      <br><br>
      Sự kiện sẽ được tổ chức vào lúc 5h30 sáng ngày 12.8.2023 tại Sân Vận Động Quốc Gia Mỹ Đình với nhiều hoạt động
      trải nghiệm hấp dẫn.
      <br><br>
      Hãy nhanh tay đăng ký tham gia Ngày hội Yoga cùng Dân trí xác lập kỷ lục Việt Nam và cùng chung tay xây dựng lối
      sống vui khỏe,
      căng tràn sức sống.
      <br><br>
      Đồng hành cùng chương trình là các đơn vị: nhà tài trợ chính Hệ thống Y tế Thu Cúc TCI; các đơn vị đồng hành:
      Wyndham Lynn Times Thanh Thủy, TuArt Wedding, MOD Production; tư vấn chuyên môn: Hương Anh
      fitness & Yoga.
    </div>
  </div>
</template>

<script setup>
import detailImg from '~/assets/img/detail-1.jpg'
import shareBtn from '~/assets/img/share-btn.png'
import {useRouter} from 'vue-router'
import {useToast} from "primevue/usetoast";

const router = useRouter()



const handleBack = () => {
  router.push('/')
}


const copyLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    console.log('thanh cong')
  }, () => {
    console.log('err')
  });
}
</script>

<style lang="scss" scoped>

</style>