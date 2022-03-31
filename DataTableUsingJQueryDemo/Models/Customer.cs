using System.ComponentModel.DataAnnotations;

namespace DataTableUsingJQueryDemo.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [Required, MaxLength(50)]
        public string FirstName { get; set; }
        [MaxLength(100)]
        public string LastName { get; set; }
        [Phone]
        public string Contact { get; set; }

        [EmailAddress]
        public string E_mail { get; set; }

        public DateTime BirthDate { get; set; }


    }
}
