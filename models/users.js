const usersModel = {
      getALL: `
            SELECT
                 *
            FROM
                 Users
                 
                 `,
                 getByID:`
                     SELECT
                          *
                     FROM
                            Users
                    WHERE
                         id=?
  
                         `,
                         getByUsername:`
                     SELECT
                          *
                     FROM
                            Users
                    WHERE
                         username = ?
  
                         `,
                         getByEmail:`
                     SELECT
                          *
                     FROM
                            Users
                    WHERE
                         email = ?
  
                         `,
                         addRow:`
                         INSERT INTO
                         Users(
                           username,
                           password,
                           email,
                           name,
                           lastname,
                           phonenumber,
                           role_id,
                           is_active
                         )VALUES(
                           ?,?,?,?,?,?,?,?
                         )
                         `,
     updateRow:`,
          pendiente
     `,
      deleteRow: `  
               UPDATE
                Users
               SET
                is_active = 0
               WHERE
                  id = ?    
     `,                          
  }
  
  module.exports = usersModel;