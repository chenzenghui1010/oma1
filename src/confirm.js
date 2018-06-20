
import {
  visitInfoListForInterviewee,
  auditVisitReserveByInterviewee,
  visitInfoListForManager,
  auditVisitReserveByManager
} from '../parking'


function confirm(){
  let type = this.$route.query.userType
  if (type == '0') {
    auditVisitReserveByInterviewee({
      visitId: this.index,
      auditValue: 1
    })
      .then(data => {

        console.log(data.data)

        this.$router.push({path: 'invitationt', query: {reason: this.reason}})
      })
      .catch(message => {
        AlertModule.show({title: message})
      })
  }
  else if (type == '1') {
    auditVisitReserveByManager({
      visitId: this.index,
      auditValue: 1
    })
      .then(data => {

        this.$router.push({path: 'invitationt', query: {reason: this.reason}})

      })
      .catch(message => {
        AlertModule.show({title: message})
      })
  }
}
