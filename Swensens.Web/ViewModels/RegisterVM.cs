using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Swensens.Web.ViewModels
{
    public class RegisterVM
    {
        [Required]
        [DisplayName("ชื่อ")]
        public string? FirstName { get; set; }
        [Required]
        [DisplayName("นามสกุล")]
        public string? LastName { get; set; }
        [Required]
        [DisplayName("เบอร์โทรศัพท์")]
        [DataType(DataType.PhoneNumber)]
        public string? Phone { get; set; }
        [Required]
        [DisplayName("อีเมล")]
        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }
        [Required]
        [DisplayName("รหัสผ่าน")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
        [Required]
        [DisplayName("เพศ(ไม่ระบุได้)")]
        public string? Gender { get; set; }
        [Required]
        [DisplayName("ของขวัญวันเกิดรอคุณอยู่")]
        public DateTime BirthDay { get; set; }
    }
}
