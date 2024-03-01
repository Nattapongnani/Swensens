using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Swensens.Web.ViewModels
{
    public class LoginVM
    {

        [Required(ErrorMessage = "Username is required")]
        [DisplayName("อีเมล")]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        [DisplayName("รหัสผ่าน")]
        public string? Password { get; set; }

        [Display(Name = "Remember Me")]
        public bool Remember { get; set; }

    }
}
