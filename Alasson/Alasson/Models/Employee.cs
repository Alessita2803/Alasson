namespace Alasson.Models
{
    public class Employee
    {
        public string Id { get; set; }    
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Charge { get; set; }
        public float Salary { get; set; }

        public Employee(string fullName, string email, string charge, float salary)
        {
            Id = Guid.NewGuid().ToString().Substring(0, 4);
            FullName = fullName;
            Email = email;
            Charge = charge;
            Salary = salary;
        }
    }
}
