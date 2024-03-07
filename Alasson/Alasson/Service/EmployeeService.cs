using Alasson.Interfaces;
using Alasson.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Alasson.Service
{
    public class EmployeesService : BaseService, IEmployeesService
    {

        public EmployeesService(AppDbContext context) : base(context)
        {
        }
        public async Task<IEnumerable<Employee>> ListAsync()
        {
            return await _context.Employees.ToListAsync();
        }
        public async Task AddAsync(Employee employee)
        {
            try
            {
                await _context.Employees.AddAsync(employee);
                await CompleteAsync();
            }
            catch (Exception ex)
            { }
        }
        public async Task<Employee> UpdateAsync(string id, Employee newEmployee)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id);
                if (employee != null)
                {
                    newEmployee.Id = employee.Id;
                    _context.Employees.Remove(employee);
                    await _context.Employees.AddAsync(newEmployee);
                    await CompleteAsync();
                    return employee;

                }
                else
                {
                    return null;
                }

            } catch (Exception ex)
            {
                return null;
            }

        }
        public async Task<string> DeleteAsync(string id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id);
                if (employee != null)
                {
                    _context.Employees.Remove(employee);
                    await CompleteAsync();
                    return "Employee Deleted Succesfully";
                }
                return "Employee Not Found";
            }catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
  
}
