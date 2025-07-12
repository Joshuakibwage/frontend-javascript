/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFVQSxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBUXJCLElBQU0sU0FBUyxHQUFjO0lBQzNCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNwQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQVF2QixJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUM3RCxPQUFVLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBSyxRQUFVO0FBQ3ZDLENBQUM7QUFHRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQWdCekM7SUFJRSxzQkFBYSxFQUF5QztZQUF4QyxTQUFTLGlCQUFFLFFBQVE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQjtJQUM1QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBjb250cmFjdD86IGJvb2xlYW47XG59XG5cblxuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIzKVxuXG5cblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5cbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG5cblxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICByZXR1cm4gYCR7Zmlyc3ROYW1lWzBdfS4gJHtsYXN0TmFtZX1gIFxufVxuXG5cbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpO1xuXG5cblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xufVxuXG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cblxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IgKHtmaXJzdE5hbWUsIGxhc3ROYW1lfTogU3R1ZGVudENvbnN0cnVjdG9yKXtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCJcbiAgfVxuXG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9