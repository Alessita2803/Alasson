using Alasson.Models;

namespace Alasson.Interfaces
{
    public interface IEmployeesService
    {
       Task<IEnumerable<Employee>> ListAsync(); //
        Task AddAsync(Employee employee);

        Task<Employee> UpdateAsync(string id,Employee newEmployee);
        Task<string> DeleteAsync(string fullname);
    }

}
